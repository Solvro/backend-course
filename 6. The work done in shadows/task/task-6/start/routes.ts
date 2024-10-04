/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const MailersController = () => import('#controllers/mailers_controller')
import router from '@adonisjs/core/services/router'
// import { throttle } from './limiter.js'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router
  .group(() => {
    router.post('/mail', [MailersController, 'sendMail'])
  })
  .prefix('api/v1')
// .use([throttle])
