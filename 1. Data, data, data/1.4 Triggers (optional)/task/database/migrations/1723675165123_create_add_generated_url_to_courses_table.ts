import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'courses'

  async up() {
    this.schema.raw(
      `ALTER TABLE ${this.tableName} ADD COLUMN link_generated TEXT GENERATED ALWAYS AS ('https://solvro/blog/' || trim(BOTH '-' FROM regexp_replace(lower(trim(name)), '[^a-z0-9\\-_]+', '-', 'gi'))) STORED`
    )
  }

  async down() {
    this.schema.raw(`ALTER TABLE ${this.tableName} DROP COLUMN IF EXISTS link_generated;`)
  }
}
