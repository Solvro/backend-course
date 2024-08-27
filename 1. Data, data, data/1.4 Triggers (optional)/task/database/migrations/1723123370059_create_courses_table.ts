import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('name').unique()
      table.integer('department_id').references('departments.id').onDelete("RESTRICT")
      table.string('description', 65535).nullable()
      table.string('url').nullable()

      table.timestamp('created_at').defaultTo('NOW()')
      table.timestamp('updated_at')
    })

    this.schema.raw(`
      CREATE TRIGGER set_default_url
      BEFORE INSERT ON ${this.tableName}
      FOR EACH ROW
      BEGIN
        IF NEW.url IS NULL THEN
          SET NEW.URL = CONCAT('https://solvro/blog/', REPLACE(LOWER(NEW.name), ' ', '-'));
        END IF;
      END;
      `)
  }



  async down() {
    this.schema.raw('DROP TRIGGER IF EXISTS set_default_url')
    this.schema.dropTable(this.tableName)
  }
}