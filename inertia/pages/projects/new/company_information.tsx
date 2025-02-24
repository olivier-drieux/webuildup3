import { Head } from '@inertiajs/react'
import { Center, Title } from '@mantine/core'
import ProjectStepperWrapper from '~/components/project-stepper/project-stepper-wrapper'

export default function CompanyInformation() {
    return (
        <>
            <Head title="Nouveau projet - Informations de l'entreprise" />
            <ProjectStepperWrapper>
                <Center flex={1}>
                    <Title>CompanyInformation</Title>
                </Center>
            </ProjectStepperWrapper>
        </>
    )
}
