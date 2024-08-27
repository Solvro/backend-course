import Student from '#models/student'
import { createStudentValidator } from '#validators/student'
import type { HttpContext } from '@adonisjs/core/http'
import { DateTime } from 'luxon'

export default class StudentsController {
  async index({ view, request }: HttpContext) {
    const page = Number(request.input('page', 1))
    const limit = 10
    const students = await Student.query()
      .limit(limit)
      .offset(limit * (page - 1))
    return view.render('students', { students, page })
  }

  async create({ view }: HttpContext) {
    return view.render('create')
  }

  async store({ request, response }: HttpContext) {
    const data = await createStudentValidator.validate(request.all())
    await Student.create({ ...data, dateOfBirth: DateTime.fromJSDate(data.dateOfBirth) })
    return response.redirect().toRoute('/')
  }

  async show({ request, view }: HttpContext) {
    return view.render('student', {
      student: await Student.findByOrFail('index', request.param('index')),
    })
  }
}


