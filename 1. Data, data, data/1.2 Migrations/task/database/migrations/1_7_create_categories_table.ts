import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Categories extends BaseSchema {
  protected tableName = 'categories'

  async up() {
    this.schema.createTable(this.tableName, (table) => {

      table.timestamp('created_at', { useTz: true }).notNullable() 
      table.timestamp('updated_at', { useTz: true }).notNullable()

      table.increments('category_id')
      table.string('name', 64).notNullable()

      table.integer('chairman_id')
          .unsigned()
          .references('chairman_id')
          .inTable('chairmen')
          .onDelete('SET NULL')

      table.integer('vice_chairman_id')
          .unsigned()
          .references('vice_chairman_id')
          .inTable('vice_chairmen')
          .onDelete('SET NULL')

      table.integer('project_id')
          .unsigned()
          .references('project_id')
          .inTable('projects')
          .onDelete('SET NULL')

    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
