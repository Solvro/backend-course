import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'

const HashPasswrod = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['index'],
  passwordColumnName: 'password',
})

export default class Member extends compose(BaseModel, HashPasswrod) {
  @column({ isPrimary: true })
  declare index: string

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare status: string

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare photoUrl: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  serializeExtras() {
    return { 'email': `${this.index}@student.pwr.edu.pl` }
  }

  static accessTokens = DbAccessTokensProvider.forModel(Member)
}