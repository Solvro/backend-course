import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'course_members'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('course_id').references('courses.course_id')
      table.integer('member_id').references('members.member_id')
      table.timestamp('created_at').defaultTo('NOW()')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
