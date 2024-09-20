import scheduler from 'adonisjs-scheduler/services/main'
import mail from '@adonisjs/mail/services/main'
import oneLinerJoke from 'one-liner-joke'

scheduler
  .call(async () => {
    const { body } = await oneLinerJoke.getRandomJoke()
    await mail.send((message) => {
      message.to('kn.solvro@pwr.edu.pl').from('Elo żelo').subject('Nowy żart na dzisiaj').text(body)
    })
  })
  .everyMinute()
