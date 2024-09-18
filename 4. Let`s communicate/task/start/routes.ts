/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const MembersController = () => import('#controllers/members_controller')
import router from '@adonisjs/core/services/router'

// router.on('/').render('pages/home')

router
  .group(() => {
    router.resource('members', MembersController).apiOnly()
  })
  .prefix('api/v1')
