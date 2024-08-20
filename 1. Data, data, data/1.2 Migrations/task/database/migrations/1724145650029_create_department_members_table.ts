import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'department_members'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('department_id').unsigned().references('departments.id').onDelete('CASCADE')
      table.integer('member_id').unsigned().references('club_members.index').onDelete('RESTRICT')

      table.timestamps(true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}