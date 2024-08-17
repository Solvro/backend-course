/* eslint-disable prettier/prettier */
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'students'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().notNullable().unique().defaultTo(this.raw('uuid_generate_v4()'))
      table.string('index', 255).notNullable()
      table.string('first_name', 255).notNullable()
      table.string('last_name', 255).notNullable()
      table.enu('status', ['IMPLEMENTATION', 'ACTIVE', 'HONORABLE', 'INACTIVE']).notNullable().defaultTo('IMPLEMENTATION')
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
