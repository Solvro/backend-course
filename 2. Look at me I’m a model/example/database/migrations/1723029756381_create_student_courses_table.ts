import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'student_courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('student_index').references('students.index').onDelete('CASCADE')
      table.integer('course_id').references('courses.id').onDelete('RESTRICT')
      
      table.date('start_date')
      table.date('end_date').nullable()

      table.timestamp('created_at').defaultTo('NOW()')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}