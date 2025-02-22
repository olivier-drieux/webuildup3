import Project from '#models/project'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
    async run() {
        for (let i = 0; i < 1000; i++) {
            await Project.create({
                name: `Project ${i + 1}`,
            })
        }
    }
}
