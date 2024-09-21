import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'members'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('index').primary()

      table.string('first_name').nullable()
      table.string('last_name').nullable()

      table.enum('status', ['implementation', 'active', 'alumni', 'inactive'], {
        useNative: true,
        enumName: 'member_status',
        existingType: true,
      })

      table.string('password').notNullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.raw('DROP TYPE IF EXISTS "member_status"')
    this.schema.dropTable(this.tableName)
  }
}