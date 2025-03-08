import Department from '#models/department'
import Member from '#models/member'
import MemberDepartment from '#models/member_department'
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

        // Fetch list of departments from the database
        const departments = await Department.all();

        if (departments.length === 0) {
            this.logger.warning("No departments found in the database.");
            return;
        }

        // Display departments and allow the user to select one or more (use id as value)
        const departmentChoices = departments.map(department => department.id.toString());

        // Prompt user to select departments (returns array of selected department ids)
        const selectedDepartmentIds = await this.prompt.multiple(
            'Select departments the member will join:',
            departmentChoices
        );

        // Create new member
        const member = await Member.create({
            index,
            first_name,
            last_name,
            status,
        });
        
        // Link the member to the selected departments using department ids
        for (const department_id of selectedDepartmentIds) {
            await MemberDepartment.create({
                member_id: member.id,
                department_id: Number.parseInt(department_id),  // Use correct department id
            });
        }

        this.logger.success("Member created and assigned to departments successfully.");
    }
}
