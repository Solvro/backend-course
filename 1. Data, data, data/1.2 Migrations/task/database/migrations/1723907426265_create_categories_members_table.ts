import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CategoriesMembers extends BaseSchema {
  protected tableName = 'categories_members'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('category_members_id')
      table.timestamp('starting_date',{ useTz: true })
      table.timestamp('ending_date',{ useTz: true })
      table.smallint('grade')
      table.text('supervisor_opinion') 

      table.timestamp('created_at', { useTz: true }).notNullable() 
      table.timestamp('updated_at', { useTz: true }).notNullable()


      table.integer('category_id')
          .unsigned()
          .references('category_id')
          .inTable('categories')
          .onDelete('CASCADE')

      table.integer('member_id')
          .unsigned()
          .references('member_id')
          .inTable('members')
          .onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
