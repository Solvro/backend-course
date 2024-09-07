import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'students'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.text('profile_photo')
    })
  }

  async down() {
    this.schema.alterTable(this.tableName,(table)=>{
      table.dropColumn('profile_photo')
    })
  }
}