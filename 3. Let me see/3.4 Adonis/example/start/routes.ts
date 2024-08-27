/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import Student from '#models/student'
import { createStudentValidator } from '#validators/student'
import router from '@adonisjs/core/services/router'
import { DateTime } from 'luxon'

router.get('/', async ({ view, request }) => {
  const page = Number(request.input('page', 1))
  const limit = 10
  const students = await Student.query()
    .limit(limit)
    .offset(limit * (page - 1))
  return view.render('students', { students, page })
})

router.get('create', ({ view }) => view.render('create'))
router.post('create', async ({ request, response }) => {
  const data = await createStudentValidator.validate(request.all())
  await Student.create({ ...data, dateOfBirth: DateTime.fromJSDate(data.dateOfBirth) })
  return response.redirect().toRoute('/')
})

router.get('/:index', async ({ request, view }) => {
  return view.render('student', {
    student: await Student.findByOrFail('index', request.param('index')),
  })
})
