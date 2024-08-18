import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'member_courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('member_index').references('members.index').onDelete('CASCADE')
      table.string('course_name').references('courses.name').onDelete('CASCADE')
      
      table.date('starting_date').nullable()
      table.date('ending_date').nullable()

      table.tinyint('grade').nullable()

      table.timestamps(true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}