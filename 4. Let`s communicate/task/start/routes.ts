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
import AutoSwagger from 'adonis-autoswagger'
import swagger from '#config/swagger'
import { middleware } from './kernel.js'

router
  .group(() => {
    router
      .resource('members', MembersController)
      .use(['destroy', 'store', 'update'], middleware.eloZelo())
    router.get('/swagger', async () => {
      return AutoSwagger.default.docs(router.toJSON(), swagger)
    })

    router.get('/docs', async () => {
      return AutoSwagger.default.ui('/api/v1/swagger')
    })
  })
  .prefix('/api/v1')
