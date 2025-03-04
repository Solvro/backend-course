import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'members'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('index').primary()
      table.text('name').notNullable()
      table.text('surname').notNullable()
      table
        .enum('status', ['IMPLEMENTATION', 'ACTIVE', 'HONORARY', 'INACTIVE'], {
          useNative: true,
          enumName: 'member_status',
          existingType: false,
        })
        .notNullable()

      table.timestamp('created_at').defaultTo('NOW()').notNullable()
      table.timestamp('updated_at').notNullable()
    })
  }

  async down() {
    this.schema.raw('DROP TYPE IF EXISTS "member_status"')
    this.schema.dropTable(this.tableName)
  }
}
