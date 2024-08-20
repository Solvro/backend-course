import { BaseSchema } from '@adonisjs/lucid/schema'

export default class MembersSchema extends BaseSchema {
  protected tableName = 'members'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('index').primary()
      table.string('name', 20).notNullable()
      table.string('surname', 30).notNullable()
      table.string('interests', 255)
      table.string('status', 15)
      table.string('department', 255)
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
