import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column, computed, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations';
import Course from './course.js';

export default class Student extends BaseModel {
  @column({ isPrimary: true })
  declare index: number

  @column()
  declare firstName: string;

  @column()
  declare lastName: string;

  // @computed()
  // get email(): string {
  //   return `${this.index}@student.pwr.edu.pl`
  // }

  public async finishedCourses() {
    await this.loadCount('courses', q => q.whereNotNull('end_date'))
    return this.$extras.courses_count
  }

  @column()
  declare email: string;

  @beforeCreate()
  static generateEmail(student: Student) {
    student.email = `${student.index}@student.pwr.edu.pl`
  }


  @column.date()
  declare dateOfBirth: DateTime

  @manyToMany(() => Course, {
    pivotTable: 'student_courses',
    relatedKey: 'id',
    pivotColumns: ['start_date', 'end_date'],
    pivotTimestamps: true
  })
  declare courses: ManyToMany<typeof Course>

  @manyToMany(() => Course, {
    pivotTable: 'student_courses',
    relatedKey: 'id',
    pivotColumns: ['start_date', 'end_date'],
    pivotTimestamps: true,
    onQuery: (q) => q.whereNull('end_date')
  })
  declare startedCourses: ManyToMany<typeof Course>


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}