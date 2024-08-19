import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'member_courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('course_id').unsigned().references('id').inTable('courses')
      table.integer('member_index').unsigned().references('index').inTable('members')

      table.date('start_date').notNullable()
      table.date('end_date').nullable()
      table.tinyint('grade').checkBetween([1, 10], 'grade must be between 1 and 10').nullable()

      table.timestamp('created_at').defaultTo('NOW()')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
