import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('name').unique()
      table.integer('department_id').references('departments.id').onDelete('RESTRICT')
      table.string('description', 65535).nullable()
      table.string('url').nullable()

      table.timestamp('created_at').defaultTo('NOW()')
      table.timestamp('updated_at')
    })

    this.schema.raw('CREATE EXTENSION IF NOT EXISTS unaccent;') // example how to add extension to our database
    this.schema.raw(
      'CREATE OR REPLACE FUNCTION generate_course_slug_if_not_exists() RETURNS TRIGGER AS $$ ' +
        'BEGIN' +
        ' IF NEW.url IS NULL THEN' +
        "   NEW.url := trim(BOTH '-' FROM regexp_replace(lower(unaccent(trim(NEW.name))), '[^a-z0-9\\-_]+', '-', 'gi'));" +
        "   NEW.url := CONCAT('https://solvro.pl/blog/', NEW.url);" +
        ' END IF;' +
        ' RETURN NEW;' +
        'END;' +
        "$$ LANGUAGE 'plpgsql';"
    )

    this.schema.raw(
      'CREATE TRIGGER generate_course_slug_url BEFORE INSERT ON courses FOR ROW EXECUTE PROCEDURE generate_course_slug_if_not_exists();'
    )
  }

  async down() {
    this.schema.dropTable(this.tableName)
    this.schema.raw('drop function generate_course_slug_if_not_exists() cascade;')
  }
}
