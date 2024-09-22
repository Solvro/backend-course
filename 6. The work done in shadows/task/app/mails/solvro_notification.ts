import { BaseMail } from '@adonisjs/mail'

export default class SolvroNotification extends BaseMail {
  from = 'Elo żelo'
  subject = 'Backend course smtp'

  /**
   * The "prepare" method is called automatically when
   * the email is sent or queued.
   */
  prepare() {
    this.message.to('kn.solvro@pwr.edu.pl')
      .htmlView('emails/solvro_mail.edge')
    }
}