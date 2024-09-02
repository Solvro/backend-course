import MembersController from '#controllers/members_controller'
import router from '@adonisjs/core/services/router'

router.get('/', [MembersController, 'index'])
router.post('create', [MembersController, 'store'])
router.get('create', [MembersController, 'create'])
router.get('/:index', [MembersController, 'show'])
