import CreateProjectBaseProps from '#interfaces/project_step_config'
import router from '@adonisjs/core/services/router'

export class ProjectStepperService {
    public getStepperConfig(): Array<CreateProjectBaseProps> {
        return [
            {
                currentStepRoute: router.makeUrl('projects.new.initialization'),
                nextStepRoute: router.makeUrl('projects.new.company_information'),
            },
            {
                currentStepRoute: router.makeUrl('projects.new.company_information'),
                previousStepRoute: router.makeUrl('projects.new.initialization'),
                nextStepRoute: router.makeUrl('projects.new.customizations'),
            },
            {
                currentStepRoute: router.makeUrl('projects.new.customizations'),
                previousStepRoute: router.makeUrl('projects.new.company_information'),
                nextStepRoute: router.makeUrl('projects.new.menus'),
            },
            {
                currentStepRoute: router.makeUrl('projects.new.menus'),
                previousStepRoute: router.makeUrl('projects.new.customizations'),
                nextStepRoute: router.makeUrl('projects.new.pages'),
            },
            {
                currentStepRoute: router.makeUrl('projects.new.pages'),
                previousStepRoute: router.makeUrl('projects.new.menus'),
                nextStepRoute: router.makeUrl('projects.new.theme'),
            },
            {
                currentStepRoute: router.makeUrl('projects.new.theme'),
                previousStepRoute: router.makeUrl('projects.new.pages'),
            },
        ]
    }
}
