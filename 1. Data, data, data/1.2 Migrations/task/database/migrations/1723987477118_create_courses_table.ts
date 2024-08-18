import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('name', 25).primary()
      table.enu('category', ['BACKEND', 'FRONTEND', 'DEVOPS', 'ML','UI', 'PM'], {
        useNative: true,
        enumName: 'category',
        existingType: false,
      }).notNullable()
      table.string('link').nullable()
      table.text('description').nullable()
      
      table.timestamps(true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}