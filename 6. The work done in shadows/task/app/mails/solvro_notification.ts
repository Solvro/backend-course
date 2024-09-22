import { BaseMail } from '@adonisjs/mail'

export default class SolvroNotification extends BaseMail {
  from = 'Elo żelo'
  subject = 'Backend course smtp'

  /**
   * The "prepare" method is called automatically when
   * the email is sent or queued.
   */
  prepare() {
    this.message.to('t.trela04@gmail.com')
      .htmlView('emails/solvro_mail.edge')
    }
}