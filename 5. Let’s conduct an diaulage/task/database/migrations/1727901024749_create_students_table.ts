import { BaseSchema } from '@adonisjs/lucid/schema'
import { Status } from '#models/student'

export default class extends BaseSchema {
  protected tableName = 'students'
  private enumName = 'student_status'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('index')
      table.string('first_name', 30).notNullable()
      table.string('last_name', 30).notNullable()
      table
        .enum('status', Object.values(Status), {
          useNative: true,
          enumName: this.enumName,
          existingType: false,
        })
        .defaultTo(Status.IMPLEMENTATION)
        .notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.raw(`DROP TYPE IF EXISTS ${this.enumName} CASCADE`)
    this.schema.dropTable(this.tableName)
  }
}
