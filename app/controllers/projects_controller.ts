import ProjectStepProps from '#interfaces/project_step_props'
import { ProjectService } from '#services/project_service'
import { ProjectStepperService } from '#services/project_stepper_service'
import { projectFilterValidator } from '#validators/project_filter'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class ProjectsController {
    constructor(private projectStepperService: ProjectStepperService) {}

    @inject()
    public async index({ request, inertia }: HttpContext, projectService: ProjectService) {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        const page = request.input('page', 1)
        const filters = await projectFilterValidator.validate(request.qs())
        const projects = await projectService.getFilteredProjects(filters, page)

        return inertia.render('projects/projects', {
            projects: inertia.merge(() => projects.data),
            meta: inertia.merge(() => projects.meta),
        })
    }

    /** STEPPER FORM FUNCTIONS */
    async initialization({ inertia }: HttpContext) {
        return inertia.render('projects/new/initialization', {
            stepIndex: 0,
            stepperConfig: this.projectStepperService.getStepperConfig(),
        } as ProjectStepProps)
    }

    async companyInformation({ inertia }: HttpContext) {
        return inertia.render('projects/new/company_information', {
            stepIndex: 1,
            stepperConfig: this.projectStepperService.getStepperConfig(),
        } as ProjectStepProps)
    }

    async customizations({ inertia }: HttpContext) {
        return inertia.render('projects/new/customizations', {
            stepIndex: 2,
            stepperConfig: this.projectStepperService.getStepperConfig(),
        } as ProjectStepProps)
    }

    async menus({ inertia }: HttpContext) {
        return inertia.render('projects/new/menus', {
            stepIndex: 3,
            stepperConfig: this.projectStepperService.getStepperConfig(),
        } as ProjectStepProps)
    }

    async pages({ inertia }: HttpContext) {
        return inertia.render('projects/new/pages', {
            stepIndex: 4,
            stepperConfig: this.projectStepperService.getStepperConfig(),
        } as ProjectStepProps)
    }

    async theme({ inertia }: HttpContext) {
        return inertia.render('projects/new/theme', {
            stepIndex: 5,
            stepperConfig: this.projectStepperService.getStepperConfig(),
        } as ProjectStepProps)
    }
    /** STEPPER FORM FUNCTIONS */
}
