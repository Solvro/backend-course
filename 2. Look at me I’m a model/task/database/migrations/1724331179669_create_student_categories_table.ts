import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'student_categories'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('student_index').references('students.index').onDelete('CASCADE')
      table.integer('category_id').references('categories.id').onDelete('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}