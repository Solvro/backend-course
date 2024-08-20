import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'course_members'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('member_id').unsigned().references('club_members.index').onDelete('CASCADE')
      table.integer('course_id').unsigned().references('courses.id').onDelete('CASCADE')
      table.date('start_date').notNullable()
      table.date('end_date').nullable()
      table.tinyint('grade').nullable()

      table.timestamps(true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}