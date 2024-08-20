import { BaseSchema } from '@adonisjs/lucid/schema'

export default class EnrollmentsSchema extends BaseSchema {
  protected tableName = 'enrollments'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('student_index').unsigned().references('index').inTable('members').onDelete('CASCADE')
      table.string('course_name', 50).references('name').inTable('courses').onDelete('CASCADE')
      table.date('start_time').notNullable()
      table.date('end_time')
      table.smallint('grade')
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())

      table.primary(['student_index', 'course_name'])
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
