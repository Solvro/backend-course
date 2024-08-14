import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'courses'

  async up() {
    this.schema.raw('CREATE EXTENSION IF NOT EXISTS unaccent;')
    this.schema.raw(
      "CREATE OR REPLACE FUNCTION generate_course_url() RETURNS TRIGGER AS $$ BEGIN NEW.link := CONCAT('https://solvro/blog/', trim(BOTH '-' FROM regexp_replace(lower(unaccent(trim(NEW.name))), '[^a-z0-9\\-_]+', '-', 'gi'))); RETURN NEW; END; $$ LANGUAGE 'plpgsql';"
    )

    this.schema.raw(
      `CREATE TRIGGER generate_course_link_on_create BEFORE INSERT ON ${this.tableName} FOR ROW EXECUTE PROCEDURE generate_course_url();`
    )
  }

  async down() {
    this.schema.raw('drop function generate_course_url() cascade;')
    this.schema.raw('DROP EXTENSION IF EXISTS unaccent;')
  }
}
