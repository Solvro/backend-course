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
const MembersController = () => import('#controllers/members_controller')
const AuthController = () => import('#controllers/auth_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router
  .group(() => {
    router.post('register', [AuthController, 'register']),
      router.post('login', [AuthController, 'login'])
  })
  .use(throttle)
  .prefix('api/v1')

router
  .group(() => {
    router.get('me', [MembersController, 'indexMe']),
      router.patch('me', [MembersController, 'updateMe'])
  })
  .use(middleware.auth())
  .prefix('api/v1/members')
