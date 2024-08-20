import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CoursesSchema extends BaseSchema {
  protected tableName = 'courses'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('name', 50).primary()
      table.string('category', 20).notNullable()
      table.string('resource', 255)
      table.string('description', 255)
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
