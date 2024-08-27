import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, belongsTo} from '@adonisjs/lucid/orm'
import SolvroMember from './solvro_member.js'
import Course from './course.js'

export default class MemberCourse extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare memberId: number

  @belongsTo(() => SolvroMember, {
    foreignKey: 'memberId',
  })
  public member!: BelongsTo<typeof SolvroMember> // is the '!' coorect?

  @column()
  declare courseId: number

  @belongsTo(() => Course, {
    foreignKey: 'courseId',
  })
  public course!: BelongsTo<typeof Course> // is the '!' coorect?

  @column.date()
  declare courseStart: DateTime

  @column.date()
  declare courseEnd: DateTime | null

  @column()
  declare finalGrade: number | null

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime
}