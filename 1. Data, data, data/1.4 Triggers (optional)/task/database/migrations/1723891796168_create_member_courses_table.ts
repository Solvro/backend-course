import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'member_courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('course_id').unsigned().references('id').inTable('courses')
      table.integer('member_index').unsigned().references('index').inTable('members')

      table.date('start_date').notNullable()
      table.date('end_date').nullable()
      table.tinyint('grade').checkBetween([1, 10], 'grade must be between 1 and 10').nullable()

      table.timestamp('created_at').defaultTo('NOW()')
      table.timestamp('updated_at')
    })
    this.schema.raw('CREATE EXTENSION IF NOT EXISTS unaccent;')

    // Utworzenie funkcji generującej URL na podstawie nazwy kursu
    this.schema.raw(`
      CREATE OR REPLACE FUNCTION generate_course_slug_if_not_exists() 
      RETURNS TRIGGER AS $$
      BEGIN
        IF NEW.url IS NULL THEN
          NEW.url := CONCAT(
            'https://solvro.pl/blog/', 
            trim(BOTH '-' FROM regexp_replace(
              lower(unaccent(trim(NEW.name))), 
              '[^a-z0-9\\-_]+', 
              '-', 
              'gi'
            ))
          );
        END IF;
        RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;
    `)

    // Utworzenie triggera, który będzie generować URL przed każdym insertem
    this.schema.raw(`
      CREATE TRIGGER generate_course_slug_url 
      BEFORE INSERT ON ${this.tableName}
      FOR EACH ROW EXECUTE FUNCTION generate_course_slug_if_not_exists();
    `)
  }

  async down() {
    this.schema.dropTable(this.tableName)
    this.schema.raw('DROP FUNCTION IF EXISTS generate_course_slug_if_not_exists() CASCADE;')
  }
}
