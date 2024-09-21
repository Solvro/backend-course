/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import { throttle } from './limiter.js'

const AuthController = () => import('#controllers/auth_controller')
const MembersController = () => import('#controllers/members_controller')
router
  .group(() => {
    router
      .resource('members', MembersController)
      .apiOnly()
      .params({
        members: 'index',
      })
      .use(['store'], throttle)
      .use(['update', 'destroy'], middleware.auth())
      

    router.post('login', [AuthController, 'login']).use(throttle)
  }).prefix("api/v1")