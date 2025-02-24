import { Head } from '@inertiajs/react'
import { Center, Title } from '@mantine/core'
import ProjectStepperWrapper from '~/components/project-stepper/project-stepper-wrapper'

export default function Customizations() {
    return (
        <>
            <Head title="Nouveau projet - Personnalisations" />
            <ProjectStepperWrapper>
                <Center flex={1}>
                    <Title>Customizations</Title>
                </Center>
            </ProjectStepperWrapper>
        </>
    )
}
