import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'member_courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      
      table.integer('member_id').unsigned().references('id').inTable('solvro_members').onDelete('CASCADE').notNullable()
      table.integer('course_id').unsigned().references('id').inTable('courses').onDelete('CASCADE').notNullable()
      table.date('course_start').notNullable()
      table.date('course_end').nullable()
      table.smallint('final_grade').nullable()

      table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).notNullable().defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
