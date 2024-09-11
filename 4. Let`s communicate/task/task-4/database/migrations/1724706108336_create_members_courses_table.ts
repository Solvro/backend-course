import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'members_courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('member_index').references('index').inTable('members').onDelete('CASCADE')
      table.bigInteger('course_id').references('id').inTable('courses').onDelete('CASCADE')
      table.timestamp('joined_date').defaultTo(this.now())
      table.timestamp('ended_date').nullable()
      table.smallint('grade').nullable()
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
