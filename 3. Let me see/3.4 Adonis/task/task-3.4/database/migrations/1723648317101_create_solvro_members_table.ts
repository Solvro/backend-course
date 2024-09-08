import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'solvro_members'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('index').primary()
      table.string('first_name', 100).notNullable()
      table.string('last_name', 100).notNullable()
      table
        .enum('status', ['Active', 'Inactive', 'Trainee', 'Honorary'], {
          useNative: true,
          enumName: 'member_status',
          existingType: false,
        })
        .nullable()
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
    this.schema.raw('DROP TYPE IF EXISTS "member_status"')
  }
}
