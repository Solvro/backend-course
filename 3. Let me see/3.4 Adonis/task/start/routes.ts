/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import Student from '#models/student'

router.on('/adonis-home').render('pages/home')

router.on('/').render('students', {
  students: await Student.all(),
})

router
  .get('/:index', async ({ params, view }) => {
    const student = await Student.findOrFail(params.index)
    return view.render('student', { student })
  })
  .where('index', router.matchers.number()) // must return 404 status code on incorrect url
