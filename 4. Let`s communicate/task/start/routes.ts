/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const StudentsController = () => import('#controllers/students_controller')

router
  .group(() => {
    router
      .resource('students', StudentsController)
      .apiOnly()
      .params({
        students: 'index',
      })
      .where('index', router.matchers.number())
  })
  .prefix('/api/v1')
