import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 100).unique()
      table.integer('section_id').references('sections.id').notNullable()
      table.text('description').nullable()
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at')
    })

    this.schema.raw(`
      CREATE OR REPLACE FUNCTION slugify_resource_link () RETURNS TRIGGER LANGUAGE PLPGSQL AS $$
        BEGIN
            IF NEW.resource_link IS NULL THEN
                NEW.resource_link := 'https://solvro/blog/' || 
                                    trim(BOTH '-' FROM regexp_replace(lower(unaccent(trim(NEW.name))), '[^a-z0-9\\-_]+', '-', 'gi'));
            END IF;
            RETURN NEW;
        END;
        $$;
      `)

    this.schema.raw(`
      CREATE TRIGGER generate_resource_link_if_null 
      BEFORE INSERT 
      ON courses 
      FOR ROW
      EXECUTE PROCEDURE slugify_resource_link ();
      `)
  }

  async down() {
    this.schema.dropTable(this.tableName)
    this.schema.raw('DROP FUNCTION slugify_resource_link() CASCADE')
  }
}
