import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Member from './Member'
import Course from './Course'

export default class Enrollment extends BaseModel {
  @column({ isPrimary: true })
  public studentIndex: number

  @column()
  public courseName: string

  @column()
  public startTime: Date

  @column()
  public endTime: Date

  @column()
  public grade: number

  @belongsTo(() => Member, { foreignKey: 'studentIndex' })
  public member: BelongsTo<typeof Member>

  @belongsTo(() => Course, { foreignKey: 'courseName' })
  public course: BelongsTo<typeof Course>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}