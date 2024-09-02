/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import MembersController from '#controllers/members_controller'

router.get('/', [MembersController, 'index'])
router.get('create', [MembersController, 'create'])

router.post('create', [MembersController, 'store'])

router.get('/:index', [MembersController, 'show']).where('index', {
  match: /^[0-9]+$/,
})
