import SolvroNotification from '#mails/solvro_notification'
import mail from '@adonisjs/mail/services/main'
import { Job } from 'adonisjs-jobs'

export default class SendEmail extends Job {
    
    async handle() {
        await mail.send(new SolvroNotification)
    }
}