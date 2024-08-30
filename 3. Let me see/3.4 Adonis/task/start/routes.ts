/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import ClubMembersController from '#controllers/club_members_controller'
import router from '@adonisjs/core/services/router'


router.get('/members', [ClubMembersController, 'index'])
router.get('/members/:index', [ClubMembersController, 'showMember']).where('index', /^[1-9]\d{5}$/)


router.on('*').redirect('/members')
