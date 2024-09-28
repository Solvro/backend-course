import EmailService from '#services/email_service'
import scheduler from 'adonisjs-scheduler/services/main'

const emailService = new EmailService()
scheduler.call(async () => {
    await emailService.sendCreativeEmail('kn.solvro@pwr.edu.pl', 'emails/creative_email', { name: 'Solvro Team' })
}).everyMinute()