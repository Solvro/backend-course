/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import AutoSwagger from 'adonis-autoswagger'
import swagger from '#config/swagger'
import { middleware } from './kernel.js'

const SessionController = () => import('#controllers/session_controller')
const MembersController = () => import('#controllers/members_controller')

router.get('/', async ({}) => {
  return 'Hello world'
})

router
  .get('/dashboard', async ({ auth, session }) => {
    const user = auth.getUserOrFail()
    console.log(session.all())
    return { index: user!.index, firstName: user!.firstName }
  })
  .use(middleware.auth())

router
  .group(() => {
    router.post('/login', [SessionController, 'login'])
    router.post('/logout', [SessionController, 'logout'])
    router.post('/register', [SessionController, 'register'])
  })
  .prefix('/api/v1/auth')

router
  .group(() => {
    router.resource('members', MembersController).params({ members: 'index' }).apiOnly()
  })
  .prefix('/api/v1')
  .use(middleware.auth())

router.get('/swagger', async () => {
  return AutoSwagger.default.docs(router.toJSON(), swagger)
})

router.get('/docs', async () => {
  return AutoSwagger.default.ui('/swagger', swagger)
})
