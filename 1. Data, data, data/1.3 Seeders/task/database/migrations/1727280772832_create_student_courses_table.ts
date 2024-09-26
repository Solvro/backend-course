import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'student_courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('student_id').unsigned().references('index').inTable('students')
      table.integer('course_id').unsigned().references('id').inTable('courses')
      table.decimal('grade')
      table.timestamp('start_date')
      table.timestamp('end_date')
      table.timestamp('created_at').defaultTo('NOW()')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}