import {BaseSchema} from '@adonisjs/lucid/schema'

export default class AddPasswordToMembers extends BaseSchema {
  protected tableName = 'members'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.string('password', 180).notNullable()
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('password')
    })
  }
}
