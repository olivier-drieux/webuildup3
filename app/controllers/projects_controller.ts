import { ProjectService } from '#services/project_service'
import { projectFilterValidator } from '#validators/project_filter'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProjectsController {
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

    async create({ inertia }: HttpContext) {
        return inertia.render('projects/new')
    }
}
