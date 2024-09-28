import type { HttpContext } from '@adonisjs/core/http'
import Student from '#models/student'
import { createStudentValidator, updateStudentValidator } from '#validators/student_validator'

export default class StudentsController {
  /**
   * Display a list of resource
   */
  async index({ request }: HttpContext) {
    return await Student.query()
      .orderBy('createdAt', 'desc')
      .paginate(request.input('page', 1), request.input('perPage', 10))
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    return {
      message: 'Student created successfully!',
      student: await Student.create(await createStudentValidator.validate(request.body())),
    }
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return await Student.findOrFail(params.index)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    const toUpdate = await Student.findOrFail(params.index)
    toUpdate.merge(await updateStudentValidator.validate(request.body()))
    return { message: 'Student updated successfully!', student: await toUpdate.save() }
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const toDelete = await Student.findOrFail(params.index)
    await toDelete.delete()
    return { message: 'Student deleted successfully!' }
  }
}
