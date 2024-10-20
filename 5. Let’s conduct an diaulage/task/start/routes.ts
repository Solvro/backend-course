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
import { throttleAuth } from '#start/limiter'
const AuthController = () => import('#controllers/auth_controller')
const StudentsController = () => import('#controllers/students_controller')

router
  .group(() => {
    router
      .resource('students', StudentsController)
      .apiOnly()
      .params({ students: 'index' })
      .where('index', router.matchers.number())
      .use(['show', 'update', 'destroy'], middleware.auth({ guards: ['api'] }))
      .use(['store', 'update', 'destroy'], middleware.eloZelo())
      .use('store', throttleAuth)

    router.post('login', [AuthController, 'login']).use(throttleAuth)

    router
      .get('students/aggregate', [StudentsController, 'aggregate'])
      .use(middleware.auth({ guards: ['api'] }))
  })
  .prefix('/api/v1')
