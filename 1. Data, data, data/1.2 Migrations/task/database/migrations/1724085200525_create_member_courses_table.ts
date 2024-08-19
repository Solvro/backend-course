import { BaseSchema } from '@adonisjs/lucid/schema'

export default class MemberCourses extends BaseSchema {
    protected tableName = 'member_courses'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').unsigned().unique().primary() // Ensure 'id' is unsigned
            table.integer('member_id').unsigned().notNullable().references('id').inTable('members')
            table.integer('course_id').unsigned().notNullable().references('id').inTable('courses') // Ensure 'course_id' is unsigned
            table.date('started_at').notNullable()
            table.date('ended_at')
            table.integer('grade')
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}