import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'member_courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('member_index')
      table.increments('course_id')

      table.primary(['member_index', 'course_id'])

      table.foreign('member_index').references('members.index').onDelete('CASCADE')
      table.foreign('course_id').references('courses.id').onDelete('CASCADE')

      table.timestamp('start_date').defaultTo('NOW()').notNullable()
      table.timestamp('end_date')
      table.integer('grade').checkBetween([1, 10])

      table.timestamp('created_at').defaultTo('NOW()').notNullable()
      table.timestamp('updated_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
