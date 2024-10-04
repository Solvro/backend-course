import MailerControllerService from '#services/send_mail'
import scheduler from 'adonisjs-scheduler/services/main'

scheduler
  .call(async () => {
    const mailerServirce = new MailerControllerService()
    await mailerServirce.sendEmail(
      'kn.solvro@pwr.edu.pl',
      'Hej',
      'Sory za zamieszanie ale task jest do zrobienia <3'
    )
  })
  .everyMinute()
