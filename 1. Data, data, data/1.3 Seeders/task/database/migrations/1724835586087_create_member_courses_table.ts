import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'member_courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('member_index').references('members.index').onDelete('CASCADE')
      table.integer('course_id').references('courses.id').onDelete('CASCADE')
      table.date('start_date')
      table.date('end_date').nullable()
      table.integer('grade', 2).nullable()

      table.timestamp('created_at').defaultTo('NOW()')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
