import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Course from './course.js'
import Member from './member.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class MemberCourse extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare member_id: number

    @column()
    declare course_id: number

    @column()
    declare started_at: Date

    @column()
    declare ended_at: Date | null

    @column()
    declare grade: number | null

    @belongsTo(() => Member)
    declare member: BelongsTo< typeof Member>

    @belongsTo(() => Course)
    declare course: BelongsTo<typeof Course>
}