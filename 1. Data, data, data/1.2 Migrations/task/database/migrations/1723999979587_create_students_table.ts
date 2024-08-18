import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'students'
  private enumName = 'student_status'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('index', { primaryKey: true })
      table.string('first_name', 30)
      table.string('last_name', 30)
      table.enum('status', ['IMPLEMENTATION', 'ACTIVE', 'ALUMNI', 'INACTIVE'], {
        useNative: true,
        enumName: this.enumName,
        existingType: false,
      })
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.raw(`DROP TYPE IF EXISTS ${this.enumName} CASCADE`)
    this.schema.dropTable(this.tableName)
  }
}
