import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'club_members'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.text('profile_photo').nullable()
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('photoUrl')
    })
  }
}