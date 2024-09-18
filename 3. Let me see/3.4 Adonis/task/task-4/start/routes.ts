import router from '@adonisjs/core/services/router'
const MembersController = () => import('#controllers/members_controller')

router.group(() => {
  router.get('', [MembersController, 'index'])
  router.get('create', [MembersController, 'create'])
  router.post('create', [MembersController, 'store'])
  router.get(':index', [MembersController, 'show'])
})
