import {BaseCommand} from '@adonisjs/core/ace'
import type {CommandOptions} from '@adonisjs/core/types/ace'
import Course from '#models/course'

export default class TestCourseModel extends BaseCommand {
  static commandName = 'test:course-model'
  static description = 'Test course model.'

  static options: CommandOptions = {startApp: true}

  private createdCourseId: number | null = null

  private async createCourse() {
    const course = await Course.create({
      name: 'Od zera do backend developera',
      resourceUrl: 'https://docs.google.com/document/d/1FR6PSLg_5G0hWC429dXyeJLonLf76L1LbHH8ycVNavA/edit',
      description: 'Ten kurs składa się z dwóch stron. Z jednej strony co tydzień poznajemy fundamentalny element tworzenia aplikacji od strony backendu, gdzie na podstawie przekazanej wiedzy rozwiązujemy i oddajemy do sprawdzenia dany snipet kodu w node js.',
    })

    this.createdCourseId = course.id
    console.log('Course created: ', course)
  }

  private async getCourse(courseId: number) {
    const course = await Course.find(courseId)

    if (course) {
      console.log('Course found: ', course)
    } else {
      console.log('Course not found: ', course)
    }
  }

  private async updateCourse(courseId: number) {
    const course = await Course.find(courseId)

    if (course) {
      course.name = 'Advanced JavaScript'
      course.description = 'A more advanced course on JavaScript.'
      await course.save()

      console.log('Course Updated:', course)
    } else {
      console.log('Course Not Found')
    }
  }

  private async deleteCourse(courseId: number) {
    const course = await Course.find(courseId)

    if (course) {
      await course.delete()
      console.log('Course Deleted')
    } else {
      console.log('Course Not Found')
    }
  }

  async run() {
    await this.createCourse()

    if (this.createdCourseId !== null) {
      await this.getCourse(this.createdCourseId)
      await this.updateCourse(this.createdCourseId)
      await this.deleteCourse(this.createdCourseId)
    }
  }
}