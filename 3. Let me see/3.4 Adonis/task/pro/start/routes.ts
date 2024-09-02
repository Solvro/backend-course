/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import StudentController from 'App/Controllers/StudentController'
//router.get('/students/:id', 'StudentController.show')
router.get('/students/create', 'StudentController.create')
router.post('/students', 'StudentController.store')

router.on('/').render('pages/home')
