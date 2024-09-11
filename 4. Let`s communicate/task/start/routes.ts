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

router.group(() => {
    router.resource('members', ClubMembersController)
      .apiOnly()
      .params({members: 'index'})
      .use(['show', 'update', 'destroy'], middleware.validateIndex())
      .use(['store', 'update', 'destroy'], middleware.eloZeloHeaderAuth())
}).prefix('api/v1')
