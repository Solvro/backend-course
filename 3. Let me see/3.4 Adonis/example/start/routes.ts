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

router.get('/', [StudentsController, 'index'])
router.get('create', [StudentsController, 'create'])
router.post('create', [StudentsController, 'store'])
router.get('/:index', [StudentsController, 'show'])