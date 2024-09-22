import type { HttpContext } from '@adonisjs/core/http'
import Student, { Status } from '#models/student'
import { createStudentValidator } from '#validators/student_validator'

export default class StudentsController {
  async index({ view }: HttpContext) {
    return view.render('students/index', { students: await Student.all() })
  }

  async show({ view, params }: HttpContext) {
    return view.render('students/show', { student: await Student.findOrFail(params.index) })
  }

  async create({ view }: HttpContext) {
    return view.render('students/create', { statuses: Object.values(Status) })
  }

  async store({ request, response, session }: HttpContext) {
    const payload = await createStudentValidator.validate(request.all())
    await Student.create({ ...payload })
    session.flash('student.created', true)

    response.redirect().status(303).toPath('/students')
  }
}
