import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'courses'

  async up() {
    this.schema.table(this.tableName, (table) => {
      table.string('url').nullable()
    })
  }

  async dow() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('url')
    })
  }
}
