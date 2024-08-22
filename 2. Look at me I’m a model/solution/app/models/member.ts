import { DateTime } from 'luxon'
import { BaseModel, column, computed, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations';
import Department from './department.js';
import Course from './course.js';

export default class Member extends BaseModel {
  @column({ isPrimary: true })
  declare index: number

  @column()
  declare firstName: string;

  @column()
  declare lastName: string;

  @computed()
  get email(): string {
    return `${this.index}@student.pwr.edu.pl`
  }

  public async finishedCourses() {
    await this.loadCount('courses', q => q.whereNotNull('ended_date'))
    return this.$extras.courses_count
  }

  @column()
  declare status: 'implementation' | 'active' | 'alumni' | 'inactive'

  @manyToMany(() => Department, {
    relatedKey: 'id',
    pivotTable: 'member_departments'
  })
  declare departments: ManyToMany<typeof Department>

  @manyToMany(() => Course, {
    relatedKey: 'id',
    pivotTable: 'member_courses',
    pivotColumns: [
      'id',
      'started_date',
      'ended_date',
      'grade'
    ],
    pivotTimestamps: true
  })
  declare courses: ManyToMany<typeof Course>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}