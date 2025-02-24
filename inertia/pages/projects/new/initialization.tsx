import { Head } from '@inertiajs/react'
import { Center, Title } from '@mantine/core'
import ProjectStepperWrapper from '~/components/project-stepper/project-stepper-wrapper'

export default function Initialization() {
    return (
        <>
            <Head title="Nouveau projet - Initialisation" />
            <ProjectStepperWrapper>
                <Center flex={1}>
                    <Title>Initialization</Title>
                </Center>
            </ProjectStepperWrapper>
        </>
    )
}
