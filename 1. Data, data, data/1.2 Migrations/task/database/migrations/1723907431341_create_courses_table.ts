import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Courses extends BaseSchema {
  protected tableName = 'courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('course_id')
      table.string('name', 128).notNullable().unique()
      table.text('description')
      table.string('course_url',2048)

      table.timestamp('created_at', { useTz: true }).notNullable() 
      table.timestamp('updated_at', { useTz: true }).notNullable()

      table.integer('course_category_id')
          .unsigned()
          .references('category_id')
          .inTable('categories')
          .onDelete('SET NULL')

    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
