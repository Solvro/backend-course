import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'course_members'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('course_id').references('courses.id').onDelete('CASCADE')
      table.integer('member_id').references('members.id').onDelete('CASCADE')
      table.integer('grade').checkBetween([1, 10])
      table.timestamp('created_at').defaultTo('NOW()')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
