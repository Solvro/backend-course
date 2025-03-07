import { BaseMailer, MessageContract } from '@adonisjs/mail'

export default class SolvroMail extends BaseMailer {
  public prepare(message: MessageContract) {
    message
      .to('kn.solvro@pwr.edu.pl')
      .from('bomba@gmail.com', 'Bombastic Bomba')
      .subject('Felix Felicis')
      .htmlView('emails/creative')
  }
}
