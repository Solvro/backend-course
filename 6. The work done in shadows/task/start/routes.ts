/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import EmailsController from '#controllers/emails_controller'
import router from '@adonisjs/core/services/router'

router.get('send-email', [EmailsController, 'sendEmail'])
router.get('send-email-advanced-view', [EmailsController, 'sendEmailWithAdvancedView'])
