import { Head } from '@inertiajs/react'
import { Center, Title } from '@mantine/core'
import ProjectStepperWrapper from '~/components/project-stepper/project-stepper-wrapper'

export default function Pages() {
    return (
        <>
            <Head title="Nouveau projet - Pages" />
            <ProjectStepperWrapper>
                <Center flex={1}>
                    <Title>Pages</Title>
                </Center>
            </ProjectStepperWrapper>
        </>
    )
}
