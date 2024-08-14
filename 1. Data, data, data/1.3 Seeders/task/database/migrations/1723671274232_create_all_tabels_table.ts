import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected coursesTable = 'courses'
  protected membersTable = 'members'
  protected associationTableCoursesMembers = 'members_courses'
  protected departmentsTable = 'departments'
  protected associationTableDepartmentsMembers = 'members_departments'

  async up() {
    this.schema.createTable(this.departmentsTable, (table) => {
      table.increments('id')
      table.string('name', 50)
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })

    this.schema.createTable(this.coursesTable, (table) => {
      table.increments('id')
      table.string('name', 255)
      table
        .bigInteger('department_id')
        .references('id')
        .inTable(this.departmentsTable)
        .onDelete('CASCADE')
      table.text('link').nullable()
      table.text('description').nullable()
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })

    this.schema.createTable(this.membersTable, (table) => {
      table.string('index', 6).unique()
      table.string('first_name', 50)
      table.string('last_name', 50)
      table.enum('status', ['wdrożeniowy', 'aktywny', 'honorowy', 'nieaktywny'])
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })

    this.schema.createTable(this.associationTableCoursesMembers, (table) => {
      table
        .string('member_index')
        .references('index')
        .inTable(this.membersTable)
        .onDelete('CASCADE')
      table.bigInteger('course_id').references('id').inTable(this.coursesTable).onDelete('CASCADE')
      table.timestamp('joined_date').defaultTo(this.now())
      table.timestamp('ended_date').nullable()
      table.enum('grade', ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })

    this.schema.createTable(this.associationTableDepartmentsMembers, (table) => {
      table
        .string('member_index', 6)
        .references('index')
        .inTable(this.membersTable)
        .onDelete('CASCADE')
      table
        .bigInteger('department_id')
        .references('id')
        .inTable(this.departmentsTable)
        .onDelete('CASCADE')
      table.timestamp('created_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.associationTableDepartmentsMembers)
    this.schema.dropTable(this.associationTableCoursesMembers)
    this.schema.dropTable(this.membersTable)
    this.schema.dropTable(this.coursesTable)
    this.schema.dropTable(this.departmentsTable)
  }
}
