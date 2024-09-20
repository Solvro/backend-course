import { Job } from 'adonisjs-jobs'

type SendEmailPayload = {}

export default class SendEmail extends Job {
    async handle(payload: SendEmailPayload) {
        this.logger.info('SendEmail job handled')
    }
}