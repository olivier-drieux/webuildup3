import { Stepper, StepperStep } from '@mantine/core'
import { useProjectStore } from '~/store/project_store'

export default function ProjectStepper() {
    const step = useProjectStore((state) => state.projectState.step)
    const setStep = useProjectStore((state) => state.setStep)

    return (
        <Stepper flex={1} px="lg" size="md" active={step} onStepClick={setStep}>
            <StepperStep label="Contexte" />
            <StepperStep label="Configurations" />
            <StepperStep label="Arborescence" />
            <StepperStep label="Mise en page" />
            <StepperStep label="Thème" />
        </Stepper>
    )
}
