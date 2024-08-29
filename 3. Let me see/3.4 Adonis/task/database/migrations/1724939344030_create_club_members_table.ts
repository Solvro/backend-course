import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'club_members'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('index')

      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.enum('status', ['Active', 'Inactive', 'Trainee', 'Honorary'], {
        useNative: true,
        enumName: 'member_status',
        existingType: false
      }).notNullable()

      table.timestamps(true, true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}