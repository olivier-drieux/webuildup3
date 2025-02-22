import ProjectsController from '#controllers/projects_controller'
import { InferPageProps } from '@adonisjs/inertia/types'
import { Head } from '@inertiajs/react'
import { Button, Center, Group, Stack, Title } from '@mantine/core'
import { useProjectStore } from '~/store/project_store'

export default function Projects(props: InferPageProps<ProjectsController, 'create'>) {
    const step = useProjectStore((state) => state.projectState.step)
    const setStep = useProjectStore((state) => state.setStep)

    console.log(props)

    return (
        <>
            <Head title="Nouveau projet" />
            <Stack flex={1}>
                <Center flex={1}>
                    {step === 0 && <Title>Contexte</Title>}
                    {step === 1 && <Title>Configurations</Title>}
                    {step === 2 && <Title>Arborescence</Title>}
                    {step === 3 && <Title>Mise en page</Title>}
                    {step === 4 && <Title>Thème</Title>}
                </Center>
                <Group ml="auto" mt="auto">
                    <Button disabled={1 > step} onClick={() => setStep(step - 1)}>
                        {`Précédent`}
                    </Button>
                    <Button disabled={step > 3} onClick={() => setStep(step + 1)}>
                        {`Suivant`}
                    </Button>
                </Group>
            </Stack>
        </>
    )
}
