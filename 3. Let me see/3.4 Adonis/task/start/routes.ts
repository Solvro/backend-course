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


router.group(() => {
    router.get('', [ClubMembersController, 'index'])
    router.get(':index', [ClubMembersController, 'showMember']).where('index', /^[1-9]\d{5}$/)
    router.get('create', [ClubMembersController, 'createMember'])
    router.post('create', [ClubMembersController, 'storeMember'])
}).prefix('/members')


router.on('*').redirect('/members')
