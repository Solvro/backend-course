import { DateTime } from 'luxon'
import { BaseModel, column, computed } from '@adonisjs/lucid/orm'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'

export enum Status {
  TRAINEE = 'Trainee',
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
  HONORARY = 'Honorary',
}

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['index'],
  passwordColumnName: 'password',
})

export default class SolvroMember extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare index: number

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare status: Status | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @computed()
  get email() {
    return `${this.index}@student.pwr.edu.pl`
  }
}
