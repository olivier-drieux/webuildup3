import Project from '#models/project'
import { BaseModelDto } from '@adocasts.com/dto/base'

export default class ProjectDto extends BaseModelDto {
    declare id: number
    declare name: string
    declare createdAt: string
    declare updatedAt: string

    constructor(project?: Project) {
        super()

        if (!project) return
        this.id = project.id
        this.name = project.name
        this.createdAt = project.createdAt.toISO()!
        this.updatedAt = project.updatedAt.toISO()!
    }
}
