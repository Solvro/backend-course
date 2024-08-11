import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'members'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('index').primary()

      table.string('first_name')
      table.string('last_name')
      table.enum('status', ['implementation', 'active', 'alumni', 'inactive'], { 
        useNative: true, // additional options only for postgresql, not required
        enumName: 'member_status',
        existingType: true, // should be dynamic or solved other way
      })
      table.timestamp('created_at').defaultTo('NOW()')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
    this.schema.raw('DROP TYPE IF EXISTS "member_status"')
  }
}