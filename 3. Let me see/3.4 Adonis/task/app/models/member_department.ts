import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Department from './department.js'
import Member from './member.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class MemberDepartment extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare member_id: number

    @column()
    declare department_id: number

    @belongsTo(() => Member)
    declare member: BelongsTo<typeof Member>

    @belongsTo(() => Department)
    declare department: BelongsTo<typeof Department>
}