/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import MembersController from '#controllers/members_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import { throttleAuth } from './limiter.js'
const AuthController = () => import('#controllers/auth_controller')
router
  .group(() => {
    router
      .resource('members', MembersController)
      .apiOnly()
      .params({
        members: 'index',
      })
      .use(['update', 'destroy'], middleware.auth())
      .use(['store'], throttleAuth)

    router.post('login', [AuthController, 'login']).use(throttleAuth)
  })
  .prefix('api/v1')
