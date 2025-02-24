import { Head } from '@inertiajs/react'
import { Center, Title } from '@mantine/core'
import ProjectStepperWrapper from '~/components/project-stepper/project-stepper-wrapper'

export default function Menus() {
    return (
        <>
            <Head title="Nouveau projet - Menus" />
            <ProjectStepperWrapper>
                <Center flex={1}>
                    <Title>Menus</Title>
                </Center>
            </ProjectStepperWrapper>
        </>
    )
}
