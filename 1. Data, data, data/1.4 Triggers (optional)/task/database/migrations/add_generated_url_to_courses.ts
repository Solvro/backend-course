// Wanted to fisnish 1. Data, data, data ASAP and encountered na error at node ace make:migration. Decided to add the file separately without testing it :c

import { BaseSchema } from '@adonisjs/lucid/schema'

export default class AddGeneratedUrlToCoursesTable extends BaseSchema {
  protected tableName = 'courses'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('dynamic_url').generatedAlwaysAs(`
        CONCAT('https://solvro/blog/', REPLACE(LOWER(name), ' ', '-'))
      `).stored()
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('dynamic_url')
    })
  }
}
