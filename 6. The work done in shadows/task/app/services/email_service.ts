import mail from "@adonisjs/mail/services/main";
import env from "#start/env";


class EmailService {
    public async sendCreativeMail() {
        await mail.send((message) => {
            message.to("kn.solvro@pwr.edu.pl").from(env.get("SMTP_USERNAME") || "").subject("Elo zelo").htmlView("welcome", {username: "Solvro"})
        })
    }
}


export default new EmailService()