import router from '@adonisjs/core/services/router'

router.resource('members', 'members_controller').apiOnly()
