import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'members_fields'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('member_id').references('members.id').onDelete('CASCADE')
      table.integer('field_id').references('fields.id').onDelete('CASCADE')
      table.timestamp('created_at').defaultTo('NOW()')
      table.timestamp('updated_at')

      table.primary(['member_id', 'field_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
