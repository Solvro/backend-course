/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import ClubMembersController from '#controllers/club_members_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import AuthLoginController from '#controllers/auth_login_controller'

router.group(() => {
  router.resource('members', ClubMembersController)
    .apiOnly()
    .params({members: 'index'})
    .use(['show', 'update', 'destroy'], middleware.validateIndex())
    .use(['update', 'destroy'], middleware.auth())

  router.post('login', [AuthLoginController, 'login'])
}).prefix('api/v1')
