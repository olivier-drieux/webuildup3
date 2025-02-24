import ProjectStepProps from '#interfaces/project_step_props'
import { router, usePage } from '@inertiajs/react'
import { Stepper, StepperStep } from '@mantine/core'

export default function ProjectStepperHeader() {
    const stepProps = usePage<ProjectStepProps>().props

    return (
        <Stepper
            flex={1}
            px="lg"
            size="md"
            active={stepProps.stepIndex}
            onStepClick={(stepIndex) =>
                router.visit(stepProps.stepperConfig[stepIndex].currentStepRoute)
            }
        >
            <StepperStep label="Contexte" />
            <StepperStep label="Configurations" />
            <StepperStep label="Arborescence" />
            <StepperStep label="Mise en page" />
            <StepperStep label="Thème" />
        </Stepper>
    )
}
