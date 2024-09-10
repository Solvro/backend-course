import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Member extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column({})
    declare index: string

    @column({})
    declare first_name: string

    @column({})
    declare last_name: string

    @column({})
    declare status: string
}