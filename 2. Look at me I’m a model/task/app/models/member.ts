import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import MemberCourse from './member_course.js'
import MemberDepartment from './member_department.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Member extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare index: string

    @column()
    declare first_name: string

    @column()
    declare last_name: string

    @column()
    declare status: string

    @hasMany(() => MemberCourse)
    declare courses: HasMany<typeof MemberCourse>
 
    @hasMany(() => MemberDepartment)
    declare departments: HasMany<typeof MemberDepartment>
}