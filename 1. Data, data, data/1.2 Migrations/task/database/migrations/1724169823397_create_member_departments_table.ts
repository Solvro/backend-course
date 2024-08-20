import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'member_departments'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      
      table.integer('member_id').unsigned().references('id').inTable('solvro_members').onDelete('CASCADE').notNullable()
      table.integer('department_id').unsigned().references('id').inTable('departments').onDelete('CASCADE').notNullable()
      table.enum('role', ['chairperson', 'member', 'novice']).notNullable().defaultTo('member')
      
      table.date('joined_date').notNullable()
      
      table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).notNullable().defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
