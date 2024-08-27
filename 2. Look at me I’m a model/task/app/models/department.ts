import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, belongsTo} from '@adonisjs/lucid/orm'
import SolvroMember from './solvro_member.js'

export default class Department extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare chairperson: number

  @belongsTo(() => SolvroMember, {
    foreignKey: 'chairperson',
  })
  public chairpersonMember!: BelongsTo<typeof SolvroMember> // is the '!' coorect?

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime

  // Can a constructor be used here in pair with the exclamation sign above at line 19?
  constructor() {
    super();
    this.chairpersonMember = {} as BelongsTo<typeof SolvroMember>;
  }
}