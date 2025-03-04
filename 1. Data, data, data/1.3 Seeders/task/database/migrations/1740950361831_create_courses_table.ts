import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.text('name').notNullable()
      table
        .enum('status', ['BACKEND', 'FRONTEND', 'DEVOPS', 'UI', 'ML', 'PM'], {
          useNative: true,
          enumName: 'course_category',
          existingType: false,
        })
        .notNullable()
      table.text('resource_url').nullable()
      table.text('description').notNullable()

      table.timestamp('created_at').defaultTo('NOW()').notNullable()
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
    this.schema.raw('DROP TYPE IF EXISTS "course_category"')
  }
}
