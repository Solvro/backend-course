import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('name', 25).primary()
      table.enu('category', ['BACKEND', 'FRONTEND', 'DEVOPS', 'ML','UI', 'PM'], {
        useNative: true,
        enumName: 'category',
        existingType: false,
      }).notNullable()
      table.string('link').nullable()
      table.text('description').nullable()
      
      table.timestamps(true)
    })

    this.schema.raw('CREATE EXTENSION IF NOT EXISTS unaccent;') // example how to add extension to our database
    this.schema.raw("CREATE OR REPLACE FUNCTION generate_course_slug_if_not_exists() RETURNS TRIGGER AS $$ "
      +"BEGIN"
      +" IF NEW.link IS NULL THEN"
      +"   NEW.link := trim(BOTH '-' FROM regexp_replace(lower(unaccent(trim(NEW.name))), '[^a-z0-9\\-_]+', '-', 'gi'));"
      +"   NEW.link := CONCAT('https://solvro.pl/blog/', NEW.link);"
      +" END IF;"
      +" RETURN NEW;"
      +"END;"
      +"$$ LANGUAGE 'plpgsql';")

    this.schema.raw("CREATE TRIGGER generate_course_slug_link BEFORE INSERT ON courses FOR ROW EXECUTE PROCEDURE generate_course_slug_if_not_exists();")
  }

  async down() {
    this.schema.raw('DROP TYPE IF EXISTS "category"')

    this.schema.dropTable(this.tableName)
    this.schema.raw('drop function generate_course_slug_if_not_exists() cascade;')
  }
}