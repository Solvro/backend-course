import {DateTime} from 'luxon'
import {BaseModel, beforeSave, column} from '@adonisjs/lucid/orm'
import hash from '@adonisjs/core/services/hash'

export default class Member extends BaseModel {
  @column({isPrimary: true})
  declare index: number

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare status: 'onboarding' | 'active' | 'honorary' | 'inactive'

  @column({serializeAs: null})
  declare password: string

  @column.dateTime({autoCreate: true})
  declare createdAt: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  declare updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(member: Member) {
    if (member.$dirty.password) {
      member.password = await hash.make(member.password)
    }
  }
}
