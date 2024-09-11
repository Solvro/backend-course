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

router.get('/', async () => {
  return { message: 'Hello, World' }
})

router.resource('members', MembersController).apiOnly()
