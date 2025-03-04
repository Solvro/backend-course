import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'member_sections'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('member_index')
      table.increments('section_id')

      table.primary(['member_index', 'section_id'])

      table.foreign('member_index').references('members.index').onDelete('CASCADE')
      table.foreign('section_id').references('sections.id').onDelete('CASCADE')

      table.timestamp('created_at').defaultTo('NOW()').notNullable()
      table.timestamp('updated_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
