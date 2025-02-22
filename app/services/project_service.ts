import Project from '#models/project'
import { projectFilterValidator } from '#validators/project_filter'
import { Infer } from '@vinejs/vine/types'

export class ProjectService {
    public async getFilteredProjects(filters: Infer<typeof projectFilterValidator>, page: number) {
        const projects = await Project.query()
            .orderBy(filters.sort ?? 'id', filters.sortDirection ?? 'asc')
            .paginate(page, 10)

        return projects
    }
}
