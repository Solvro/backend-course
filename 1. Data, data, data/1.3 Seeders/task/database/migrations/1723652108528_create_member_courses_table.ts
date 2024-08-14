import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'member_courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('member_index').references('solvro_members.index')
      table.integer('course_id').references('courses.id')
      table.primary(['member_index', 'course_id'])
      table.date('start_date').notNullable()
      table.date('end_date').nullable()
      table.integer('grade').checkBetween([1, 10]).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}