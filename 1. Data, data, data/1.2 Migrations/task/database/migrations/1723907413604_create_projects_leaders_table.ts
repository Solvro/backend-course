import { BaseSchema } from '@adonisjs/lucid/schema'

export default class ProjectsLeaders extends BaseSchema {
  protected tableName = 'projects_leaders'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('projects_leaders_id') 

      table.timestamp('created_at', { useTz: true }).notNullable() 
      table.timestamp('updated_at', { useTz: true }).notNullable()

      table.integer('project_id')
          .unsigned()
          .references('project_id')
          .inTable('projects')
          .onDelete('CASCADE')

      table.integer('leader_id')
          .unsigned()
          .references('leader_id')
          .inTable('leaders')
          .onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
