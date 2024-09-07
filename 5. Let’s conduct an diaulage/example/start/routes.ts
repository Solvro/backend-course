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
import { throttle } from './limiter.js'
const StudentsController = () => import('#controllers/students_controller')

router.put('/api/v1/students', [StudentsController, 'update']).use([middleware.auth(), throttle])
