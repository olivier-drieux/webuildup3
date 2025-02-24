import ProjectStepConfig from '#interfaces/project_step_config'
import { PageProps } from '@adonisjs/inertia/types'

export default interface ProjectStepProps extends PageProps {
    stepIndex: number
    stepperConfig: Array<ProjectStepConfig>
}
