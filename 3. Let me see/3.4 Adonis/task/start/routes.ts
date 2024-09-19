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
