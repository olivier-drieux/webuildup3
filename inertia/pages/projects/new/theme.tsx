import { Head } from '@inertiajs/react'
import { Center, Title } from '@mantine/core'
import ProjectStepperWrapper from '~/components/project-stepper/project-stepper-wrapper'

export default function Theme() {
    return (
        <>
            <Head title="Nouveau projet - Thème" />
            <ProjectStepperWrapper>
                <Center flex={1}>
                    <Title>Theme</Title>
                </Center>
            </ProjectStepperWrapper>
        </>
    )
}
