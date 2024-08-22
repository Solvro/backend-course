import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'student_courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('student_index').references('students.index').onDelete('CASCADE')
      table.integer('course_id').references('courses.id').onDelete('CASCADE')

      table.integer('grade', 2).nullable()

      table.date('started_date')
      table.date('ended_date').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}