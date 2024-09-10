import Member from '#models/member'
import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'


export default class CreateMember extends BaseCommand {
    static commandName = 'create:member'
    static description = ''

    static options: CommandOptions = {
        startApp: true
    }

    async run() {
        const index = await this.prompt.ask('Enter member index: ');
        const first_name = await this.prompt.ask('Enter member first name: ');
        const last_name = await this.prompt.ask('Enter member last name: ');
        const status = await this.prompt.ask('Enter member status: ');

        // const [newMember] = await db
        //     .table('members')
        //     .returning('index')
        //     .insert({
        //         index,
        //         first_name,
        //         last_name,
        //         status,
        //     });
        await Member.create({
            index,
            first_name,
            last_name,
            status,
        });
        
        this.logger.success("OK");
    }
}