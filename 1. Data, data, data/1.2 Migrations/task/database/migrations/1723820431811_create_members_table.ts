import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'members'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('index').primary()
      table.string('name', 25).notNullable()
      table.string('surname', 50).notNullable()

      table.enu('status', ['ACITVE', 'NOT_ACITVE', 'NEW', 'HONORED'], {
        useNative: true,
        enumName: 'member_status',
        existingType: false,
      }).notNullable()

      table.timestamps(true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}