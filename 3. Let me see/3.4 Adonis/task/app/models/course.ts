import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Department from './department.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Course extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare name: string

    @column()
    declare description: string

    @column()
    declare link: string

    @column()
    declare department_id: number

    @belongsTo(() => Department)
    declare department: BelongsTo<typeof Department>
}