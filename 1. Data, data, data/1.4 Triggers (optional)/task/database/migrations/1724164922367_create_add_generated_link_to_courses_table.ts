import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'courses'

  async up() {
    this.schema.raw(`ALTER TABLE courses
                        ADD COLUMN dynamic_link TEXT 
                            GENERATED ALWAYS AS 
                                ('https://solvro/blog/' || trim(BOTH '-' FROM regexp_replace(lower(trim(name)), '[^a-z0-9\\-_]+', '-', 'gi')))
                                STORED`)
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('dynamic_link')
    })
  }
}
