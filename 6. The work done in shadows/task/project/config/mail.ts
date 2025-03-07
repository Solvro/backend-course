import { defineConfig, transports } from '@adonisjs/mail'

const mailConfig = defineConfig({
  default: 'smtp',

  /**
   * A static address for the "from" property. It will be
   * used unless an explicit from address is set on the
   * Email
   */
  from: {
    address: 'very-cool-solvro-email@gmail.com',
    name: 'Your Name',
  },

  /**
   * A static address for the "reply-to" property. It will be
   * used unless an explicit replyTo address is set on the
   * Email
   */
  replyTo: {
    address: 'reply-to-email@gmail.com',
    name: 'Reply Name',
  },

  /**
   * The mailers object can be used to configure multiple mailers
   * each using a different transport or the same transport with a different
   * options.
   */
  mailers: {
    smtp: transports.smtp({
      host: 'smtp.gmail.com',
      port: 465,
      auth: {
        type: 'login',
        user: 'very-cool-solvro-email@gmail.com',
        pass: 'very-cool-solvro-email-password',
      },
    }),

    resend: transports.resend({
      key: 'KlUcZyKlUcZyKlUcZyKlUcZyKlUcZy',
      baseUrl: 'https://api.resend.com',
    }),
  },
})

export default mailConfig
