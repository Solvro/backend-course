import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 100)
      table.integer('section_id').references('sections.id').notNullable()
      table.text('description').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}