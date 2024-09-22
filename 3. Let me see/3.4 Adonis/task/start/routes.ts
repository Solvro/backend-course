/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const StudentsController = () => import('#controllers/students_controller')

router
  .group(() => {
    router.get('/', [StudentsController, 'index'])
    router.get('/:index', [StudentsController, 'show']).where('index', router.matchers.number())
    router.get('/create', [StudentsController, 'create'])
    router.post('/create', [StudentsController, 'store'])
  })
  .prefix('/students')

router.on('/*').redirect('/students')
