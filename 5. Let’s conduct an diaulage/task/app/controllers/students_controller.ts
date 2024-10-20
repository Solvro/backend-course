import type { HttpContext } from '@adonisjs/core/http'
import Student from '#models/student'
import { createStudentValidator, updateStudentValidator } from '#validators/student_validator'
import drive from '@adonisjs/drive/services/main'
import StudentService from '#services/student_service'
import { inject } from '@adonisjs/core'
import db from '@adonisjs/lucid/services/db'

export default class StudentsController {
  /**
   * Display a list of resource
   */
  async index({ request, logger }: HttpContext) {
    logger.info('Display students request from %s', request.ip())
    const query = Student.query()

    // filter
    let filters = request.only(['firstName', 'lastName', 'status'])
    for (let filterKey in filters) {
      if (filterKey === 'status')
        query.whereRaw('status::text ILIKE ?', [`%${filters[filterKey]}%`])
      else query.whereLike(filterKey, `%${filters[filterKey as keyof typeof filters]}%`)
    }

    // sort
    query.orderBy(request.input('sortBy', 'createdAt'), request.input('order', 'asc'))

    // paginate
    return await query.paginate(request.input('page', 1), request.input('perPage', 10))
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, logger }: HttpContext) {
    logger.info('Create student request from %s', request.ip())
    return {
      message: 'Student created successfully!',
      student: await Student.create(await createStudentValidator.validate(request.body())),
    }
  }

  /**
   * Show individual record
   */
  async show({ params, logger, auth }: HttpContext) {
    logger.info('Show student request from %o', auth.getUserOrFail())
    return await Student.findOrFail(params.index)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, logger, auth }: HttpContext) {
    logger.info('Update student request from %o', auth.getUserOrFail())

    let toUpdate
    await db.transaction(async (trx) => {
      toUpdate = await Student.findOrFail(params.index, { client: trx })
      toUpdate.merge(await updateStudentValidator.validate(request.body()))

      const image = request.file('profilePhoto', {
        size: '2mb',
        extnames: ['png', 'jpg', 'jpeg'],
      })
      if (image) {
        const path = `students/${toUpdate.index}.${image.extname}`
        await image.moveToDisk(path)
        toUpdate.merge({ profilePhoto: await drive.use().getUrl(path) })
      }

      await toUpdate.save()
    })

    return { message: 'Student updated successfully!', student: toUpdate }
  }

  /**
   * Delete record
   */
  async destroy({ params, logger, auth }: HttpContext) {
    logger.info('Remove student request from %o', auth.getUserOrFail())
    const toDelete = await Student.findOrFail(params.index)
    await toDelete.delete()
    return { message: 'Student deleted successfully!' }
  }

  @inject()
  async aggregate({ request, logger, auth }: HttpContext, studentService: StudentService) {
    logger.info('Aggregate students request from %o', auth.getUserOrFail())
    return await studentService.aggregateByStatusesAndIndexRange(request.qs().range)
  }
}
