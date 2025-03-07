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

router
  .group(() => {
    router
      .resource('members', MembersController)
      .apiOnly()
      .params({
        members: 'index',
      })
      .use(['store', 'update', 'destroy'], middleware.eloZeloAuth())
  })
  .prefix('api/v1')
