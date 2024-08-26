/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import Student from '#models/student'
import router from '@adonisjs/core/services/router'

router.get('/', async ({ view }) => {
  return view.render('students', {
    students: await Student.all(),
  })
})

router.get('create', ({ view }) => view.render('create'))
router.post('create', async ({ request, response }) => {
  await Student.create({
    index: request.input('index'),
    firstName: request.input('firstName'),
    lastName: request.input('lastName'),
    dateOfBirth: request.input('dateOfBirth'),
  })

  return response.redirect().toRoute('/')
})

router.get('/:index', async ({ request, view }) => {
  return view.render('student', {
    student: await Student.findByOrFail('index', request.param('index')),
  })
})
