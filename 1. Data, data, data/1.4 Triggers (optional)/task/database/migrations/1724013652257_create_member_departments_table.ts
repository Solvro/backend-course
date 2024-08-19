import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'member_departments'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('member_index').references('members.index').onDelete('CASCADE')
      table.enu('departments', ['BACKEND', 'FRONTEND', 'DEVOPS', 'UI', 'ML', 'PM'], {
        useNative: true,
        enumName: 'departments',
        existingType: false,
      }).notNullable()

      table.timestamps(true)
    })
  }

  async down() {
    this.schema.raw('DROP TYPE IF EXISTS "departments"')
    this.schema.dropTable(this.tableName)
  }
}