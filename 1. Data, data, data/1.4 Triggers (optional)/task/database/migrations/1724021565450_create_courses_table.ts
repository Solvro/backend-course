import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').unique()
      table.string('specialization').references('specializations.name').onDelete('RESTRICT')
      table.text('description').nullable()
      table.text('link').nullable()
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at')
    })

    this.schema.raw('CREATE EXTENSION IF NOT EXISTS unaccent;')
    this.schema.raw(
      'CREATE OR REPLACE FUNCTION generate_course_slug_link() ' +
        'RETURNS TRIGGER ' +
        'LANGUAGE PLPGSQL ' +
        'AS $$ ' +
        'BEGIN ' +
        'IF NEW.link IS NULL THEN ' +
        "    NEW.link := CONCAT('https://solvro/blog/'," +
        "                  trim(BOTH '-' FROM regexp_replace(lower(unaccent(trim(NEW.name))), '[^a-z0-9\\-_]+', '-', 'gi'))); " +
        'END IF; ' +
        'RETURN NEW; ' +
        'END; ' +
        '$$'
    )
    this.schema.raw(
      'CREATE TRIGGER generate_course_slug_link_on_insert ' +
        'BEFORE INSERT ON ' +
        this.tableName +
        ' FOR EACH ROW ' +
        'EXECUTE PROCEDURE generate_course_slug_link();'
    )
  }

  async down() {
    this.schema.dropTable(this.tableName)
    this.schema.raw('DROP FUNCTION IF EXISTS generate_course_slug_link() CASCADE;')
  }
}
