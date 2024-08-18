/* eslint-disable prettier/prettier */
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'students_courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().notNullable().unique().defaultTo(this.raw('uuid_generate_v4()'))
      table.uuid('student_id').references('students.id').onDelete('CASCADE')
      table.uuid('course_id').references('id').inTable('courses').onDelete('CASCADE')
      table.timestamp('started_at')
      table.timestamp('completed_at')
      table.smallint('evaluation')
      table.timestamp('created_at').defaultTo('NOW()')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}