import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, belongsTo} from '@adonisjs/lucid/orm'
var slugify = require('slugify')
import SolvroMember from './solvro_member.js'
import Department from './department.js'


export default class Course extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description: string | null

  @column()
  declare resources: string | null

  @column()
  declare lead: number

  @belongsTo(() => SolvroMember, {
    foreignKey: 'lead',
  })
  public leadMember!: BelongsTo<typeof SolvroMember>  // is the '!' coorect?

  @column()
  declare department: number | null

  @belongsTo(() => Department, {
    foreignKey: 'department',
  })
  public departmentRelation!: BelongsTo<typeof Department>

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime

  async generateURL(course: Course){
    if(course.name){
      const slug = slugify(course.name)
      course.resources = `https://solvro.pl/blog/${slug}`
    }
  }
}