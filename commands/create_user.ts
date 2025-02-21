import User from '#models/user'
import { inject } from '@adonisjs/core'
import { BaseCommand, args, flags } from '@adonisjs/core/ace'
import { CommandOptions } from '@adonisjs/core/types/ace'

export default class CreateUser extends BaseCommand {
    static commandName = 'create:user'
    static description = 'Create a new user'

    static options: CommandOptions = {
        // Allow the command to access services, models, etc.
        startApp: true,
    }

    @args.string()
    declare username: string

    @args.string()
    declare email: string

    @args.string()
    declare password: string

    @flags.string({ parse: (value) => value.toLowerCase() })
    declare role: string

    @inject()
    async run() {
        try {
            const user = await User.create({
                username: this.username,
                email: this.email,
                password: this.password,
            })

            this.logger.info(
                `Created user ${user.username} with email ${user.email} and role ${this.role ?? 'user'}`
            )
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                this.logger.error('A user with that email already exists')
            } else {
                this.logger.error(error.message)
            }
        }
    }
}
