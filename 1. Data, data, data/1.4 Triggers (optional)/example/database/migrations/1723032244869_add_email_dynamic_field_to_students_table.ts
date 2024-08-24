import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'students'

  async up() {
    this.schema.raw("ALTER TABLE students ADD COLUMN email_dynamic TEXT GENERATED ALWAYS AS (index || '@student.pwr.edu.pl') STORED")
  }

  async down() {
    this.schema.dropColumn('email_dynamic')
  }
}