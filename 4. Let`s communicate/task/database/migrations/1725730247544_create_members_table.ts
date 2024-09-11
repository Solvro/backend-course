import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'members'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('index').primary()

      table.text('first_name')
      table.text('last_name')

      table.enum('status', ['implementation', 'active', 'alumni', 'inactive'], {
        useNative: true,
        enumName: 'member_status',
        existingType: false,
      })

      table.timestamps(true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
    this.schema.raw('DROP TYPE IF EXISTS "member_status"')
  }
}