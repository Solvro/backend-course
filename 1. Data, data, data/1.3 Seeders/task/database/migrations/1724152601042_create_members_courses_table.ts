import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'members_courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('member_id').references('members.id').onDelete('CASCADE')
      table.integer('course_id').references('courses.id').onDelete('CASCADE')
      table.timestamp('started_at')
      table.timestamp('ended_at').nullable()
      table.integer('grade')
      table.check('grade >=1 AND grade <=10')
      table.timestamp('created_at').defaultTo('NOW()')
      table.timestamp('updated_at')

      table.primary(['member_id', 'course_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
