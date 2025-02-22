import ProjectDto from '#dtos/project'
import Project from '#models/project'
import { ProjectService } from '#services/project_service'
import { projectFilterValidator } from '#validators/project_filter'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import { SimplePaginatorMetaKeys } from '@adonisjs/lucid/types/querybuilder'

export default class ProjectsController {
    @inject()
    public async index({ request, inertia }: HttpContext, projectService: ProjectService) {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        const page = request.input('page', 1)
        const filters = await projectFilterValidator.validate(request.qs())

        const projects = await projectService.getFilteredProjects(filters, page)

        const projectsData = projects.toJSON()

        return inertia.render('projects/index', {
            projects: inertia.merge(() =>
                projectsData.data.map((project) => new ProjectDto(project as Project))
            ),
            meta: inertia.merge(() => projectsData.meta as SimplePaginatorMetaKeys),
        })
    }

    async create({ inertia }: HttpContext) {
        return inertia.render('projects/new')
    }
}
