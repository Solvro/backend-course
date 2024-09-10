/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import MembersController from '#controllers/members_controller'
import router from '@adonisjs/core/services/router'

router.get('/members', [MembersController, 'index']);
router.get('/members/create', [MembersController, 'create']);
router.post('/members/create', [MembersController, 'store']);
router.get('/members/:index', [MembersController, 'show']);


router.on('/').redirect('/members')
