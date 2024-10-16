import { DateTime } from 'luxon'
import { BaseModel, column, computed } from '@adonisjs/lucid/orm'
import { compose } from '@adonisjs/core/helpers'
import hash from '@adonisjs/core/services/hash'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['index'],
  passwordColumnName: 'password',
})

export default class Student extends compose(BaseModel, AuthFinder) {
  static accessTokens = DbAccessTokensProvider.forModel(Student, {
    table: 'auth_access_tokens',
    expiresIn: '30 days',
    prefix: 'oat_',
    type: 'auth_token',
    tokenSecretLength: 40,
  })

  @column({ isPrimary: true })
  declare index: number

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare status: Status

  @computed()
  get email(): string {
    return `${this.index}@student.pwr.edu.pl`
  }

  @column.dateTime({ autoCreate: true, serialize: (value) => value?.toFormat('dd-MM-yyyy TTT') })
  declare createdAt: DateTime

  @column.dateTime({
    autoCreate: true,
    autoUpdate: true,
    serialize: (value) => value?.toFormat('dd-MM-yyyy TTT'),
  })
  declare updatedAt: DateTime
}

export enum Status {
  IMPLEMENTATION = 'IMPLEMENTATION',
  ACTIVE = 'ACTIVE',
  ALUMNI = 'ALUMNI',
  INACTIVE = 'INACTIVE',
}
