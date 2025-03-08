import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Course from './course.js'
import MemberDepartment from './member_department.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Department extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare name: string

    @hasMany(() => Course)
    declare courses: HasMany<typeof Course>

    @hasMany(() => MemberDepartment)
    declare members: HasMany<typeof MemberDepartment>
}