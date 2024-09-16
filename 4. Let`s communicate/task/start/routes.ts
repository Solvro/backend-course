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
const MembersController = () => import('#controllers/members_controller')
router
  .group(() => {
    router
      .resource('members', MembersController)
      .apiOnly()
      .params({
        members: 'index',
      })
      .use(['store', 'show', 'destroy'], middleware.eloZelo())
  })
  .prefix('api/v1')
