import {DateTime} from 'luxon'
import {BaseModel, column} from '@adonisjs/lucid/orm'
import hash from '@adonisjs/core/services/hash'
import {withAuthFinder} from "@adonisjs/auth/mixins/lucid";
import {compose} from "@adonisjs/core/helpers";
import {DbAccessTokensProvider} from "@adonisjs/auth/access_tokens";

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['index'],
  passwordColumnName: 'password',
})

export default class Member extends compose(BaseModel, AuthFinder) {
  @column({isPrimary: true})
  declare index: number

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare status: 'onboarding' | 'active' | 'honorary' | 'inactive'

  @column()
  declare photo: string

  @column({serializeAs: null})
  declare password: string

  @column.dateTime({autoCreate: true})
  declare createdAt: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  declare updatedAt: DateTime

  static accessTokens = DbAccessTokensProvider.forModel(Member)
}
