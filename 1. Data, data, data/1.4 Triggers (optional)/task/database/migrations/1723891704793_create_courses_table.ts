import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.integer('departments_id').unsigned().references('id').inTable('departments')
      table.string('resource_link')
      table.text('description').nullable()
      table.timestamp('created_at').defaultTo('NOW()')
      table.timestamp('updated_at')
    })

    this.schema.raw('CREATE EXTENSION IF NOT EXISTS unaccent;')

    // Dodanie funkcji triggera
    this.schema.raw(`
      CREATE OR REPLACE FUNCTION generate_course_slug() 
      RETURNS TRIGGER AS $$
      BEGIN
        IF NEW.resource_link IS NULL THEN
          NEW.resource_link := 'https://solvro.pl/blog/' || 
                     trim(both '-' from regexp_replace(lower(unaccent(trim(NEW.name))), '[^a-z0-9\\-_]+', '-', 'gi'));
        END IF;
        RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;
    `)

    // Dodanie triggera do tabeli courses
    this.schema.raw(`
      CREATE TRIGGER set_course_url
      BEFORE INSERT OR UPDATE ON ${this.tableName}
      FOR EACH ROW EXECUTE FUNCTION generate_course_slug();
    `)
  }

  async down() {
    //delete triger and function
    this.schema.raw('DROP TRIGGER IF EXISTS set_course_url ON courses;')
    this.schema.raw('DROP FUNCTION IF EXISTS generate_course_slug();')

    this.schema.dropTable(this.tableName)
  }
}
