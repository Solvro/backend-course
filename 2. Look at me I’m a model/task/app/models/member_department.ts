import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, belongsTo} from '@adonisjs/lucid/orm'
import SolvroMember from './solvro_member.js'
import Department from './department.js'

export default class MemberDepartment extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare memberId: number

  @belongsTo(() => SolvroMember, {
    foreignKey: 'memberId',
  })
  public member!: BelongsTo<typeof SolvroMember>  // is the '!' coorect?

  @column()
  declare departmentId: number

  @belongsTo(() => Department, {
    foreignKey: 'departmentId',
  })
  public department!: BelongsTo<typeof Department>  // is the '!' coorect?

  @column()
  declare role: 'chairperson' | 'member' | 'novice'

  @column.date()
  declare joinedDate: DateTime

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime
}