import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  async up() {
    // Create enum type for student status
    await this.db
      .rawQuery(
        `
      CREATE TYPE "Student Status" AS ENUM (
        'beginner',
        'active',
        'honor',
        'inactive'
      )
    `
      )
      .exec()

    // Create categories table
    this.schema.createTable('categories', (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })

    // Create courses table
    this.schema.createTable('courses', (table) => {
      table.increments('id').primary()
      table.string('name').notNullable().unique()
      table.text('description').notNullable()
      table.string('url')
      table
        .integer('category_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('categories')
        .onDelete('NO ACTION')
        .onUpdate('NO ACTION')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })

    // Create students table
    this.schema.createTable('students', (table) => {
      table.string('index').primary()
      table.string('name').notNullable()
      table.string('surname').notNullable()
      table
        .enum('status', ['beginner', 'active', 'honor', 'inactive'], {
          useNative: true,
          enumName: 'Student Status',
          existingType: true,
        })
        .notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })

    // Create interests table
    this.schema.createTable('interests', (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })

    // Create student_interests table
    this.schema.createTable('student_interests', (table) => {
      table.increments('id').primary()
      table
        .string('student_index')
        .notNullable()
        .references('index')
        .inTable('students')
        .onDelete('NO ACTION')
        .onUpdate('NO ACTION')
      table
        .integer('interest_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('interests')
        .onDelete('NO ACTION')
        .onUpdate('NO ACTION')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })

    // Create student_courses table
    this.schema.createTable('student_courses', (table) => {
      table.increments('id').primary()
      table
        .string('student_index')
        .notNullable()
        .references('index')
        .inTable('students')
        .onDelete('NO ACTION')
        .onUpdate('NO ACTION')
      table
        .integer('course_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('courses')
        .onDelete('NO ACTION')
        .onUpdate('NO ACTION')
      table.timestamp('start_timestamp').notNullable()
      table.timestamp('end_timestamp')
      table.decimal('grade')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable('student_courses')
    this.schema.dropTable('student_interests')
    this.schema.dropTable('interests')
    this.schema.dropTable('students')
    this.schema.dropTable('courses')
    this.schema.dropTable('categories')

    // Drop the enum type
    this.schema.raw('DROP TYPE IF EXISTS "Student Status"')
  }
}
