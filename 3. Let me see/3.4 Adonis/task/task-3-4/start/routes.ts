/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const MembersController = () => import('#controllers/members_controller')

router.get('/', [MembersController, 'index'])

router.get('/new', [MembersController, 'create'])

router.post('/new', [MembersController, 'store'])

router.get('/:id', [MembersController, 'show'])
