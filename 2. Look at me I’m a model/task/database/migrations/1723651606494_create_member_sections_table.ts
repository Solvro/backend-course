import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'member_sections'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('member_index').references('solvro_members.index')
      table.integer('section_id').references('sections.id')
      table.primary(['member_index', 'section_id'])
      table.date('joined_at').notNullable()
      table.date('left_at').nullable()
      table.timestamp('created_at').defaultTo('NOW()')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
