import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column } from '@adonisjs/lucid/orm'

function createSlug(name: string): string {
  return name
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')         
    .replace(/[^\w\-]+/g, '')      
    .replace(/\-\-+/g, '-')       
    .replace(/^-+/, '')            
    .replace(/-+$/, '');           
}

export default class Course extends BaseModel {
  @column({ isPrimary: true })
  declare id: string
// juz rozumiem roznice w uzyciu modelu i skad problemy z typami, ale nie chce mi sie juz poprawiac, super zadanko pozdrawiam
  @column()
  declare department_id: string

  @column()
  declare name: string

  @column()
  declare link: string 

  @column()
  declare description: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeSave()
  public static async createNewUrl(course: Course) {
    if (course.$dirty) {
      console.log('Aktualizacja kursu:', course.name)
      const slug = createSlug(course.name)
      course.link = `https://solvro.pl/blog/${slug}`
    }
  }
}