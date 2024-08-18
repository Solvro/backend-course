import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'student_specializations'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('student_index').references('students.index').onDelete('CASCADE')
      table.string('specialization').references('specializations.name').onDelete('RESTRICT')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
