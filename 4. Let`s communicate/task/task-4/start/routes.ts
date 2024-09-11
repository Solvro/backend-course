/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const MembersController = () => import('#controllers/members_controller')
import swagger from '#config/swagger'
import router from '@adonisjs/core/services/router'
import AutoSwagger from 'adonis-autoswagger'

router.get('/', async () => {
  return { message: 'Hello, World' }
})

router.get('/swagger', async () => {
  return AutoSwagger.default.docs(router.toJSON(), swagger)
})

router.get('/docs', async () => {
  return AutoSwagger.default.ui('/swagger', swagger)
})

router.resource('members', MembersController).apiOnly()
