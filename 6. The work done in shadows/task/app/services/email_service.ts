import mail from "@adonisjs/mail/services/main";

export default class EmailService {
    async sendCreativeEmail(recipient: string) {
        await mail.send((message) => {
            message
                .to(recipient)
                .from('plaskamateuszi8@gmail.com')
                .subject('Creative Greeting from the TypeScript World!')
                .htmlView('emails/creative_email', { name: 'Solvro Team' })
        })
    }
}