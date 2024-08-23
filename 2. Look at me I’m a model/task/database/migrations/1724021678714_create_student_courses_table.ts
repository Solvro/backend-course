import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'student_courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('student_index').references('students.index').onDelete('CASCADE')
      table.integer('course_id').references('courses.id').onDelete('CASCADE')
      table.date('start_date').notNullable()
      table.date('end_date')
      table.smallint('grade').checkBetween([1, 10], 'grade_range')
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
