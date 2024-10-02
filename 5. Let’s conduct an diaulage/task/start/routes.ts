/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
const StudentsController = () => import('#controllers/students_controller')

router
  .group(() => {
    router
      .resource('students', StudentsController)
      .apiOnly()
      .params({ students: 'index' })
      .where('index', router.matchers.number())
      .use(['store', 'update', 'destroy'], middleware.eloZelo())
  })
  .prefix('/api/v1')
