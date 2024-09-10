/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import MembersController from "#controllers/members_controller";

router.group(() => {
  router.resource('members', MembersController).apiOnly().params({members: 'index'})
}).prefix('api/v1')
