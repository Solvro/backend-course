
import SolvroNotification from '#mails/solvro_notification';
import mail from '@adonisjs/mail/services/main';
import scheduler from 'adonisjs-scheduler/services/main'

scheduler.command("inspire").everyFiveSeconds();

scheduler.call(() => {
    mail.send(new SolvroNotification)
}).everyMinute()