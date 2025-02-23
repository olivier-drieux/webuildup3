import ProjectDto from '#dtos/project'
import Project from '#models/project'
import { projectFilterValidator } from '#validators/project_filter'
import { SimplePaginatorMetaKeys } from '@adonisjs/lucid/types/querybuilder'
import { Infer } from '@vinejs/vine/types'

export class ProjectService {
    public async getFilteredProjects(filters: Infer<typeof projectFilterValidator>, page: number) {
        const projects = await Project.query()
            .orderBy(filters.sort ?? 'id', filters.sortDirection ?? 'asc')
            .paginate(page, 10)

        const projectsData = projects.toJSON()

        return {
            data: projectsData.data.map((project) => new ProjectDto(project as Project)),
            meta: projectsData.meta as SimplePaginatorMetaKeys,
        }
    }
}
