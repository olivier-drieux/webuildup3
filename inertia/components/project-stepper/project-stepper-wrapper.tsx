import ProjectStepProps from '#interfaces/project_step_props'
import { router, usePage } from '@inertiajs/react'
import { Button, Group, Stack } from '@mantine/core'

export default function ProjectStepperWrapper({ children }: { children: React.ReactNode }) {
    const stepProps = usePage<ProjectStepProps>().props

    const previousConfig = stepProps.stepperConfig[stepProps.stepIndex - 1]
    const nextConfig = stepProps.stepperConfig[stepProps.stepIndex + 1]

    return (
        <Stack flex={1}>
            {children}
            <Group ml="auto" mt="auto">
                <Button
                    disabled={!previousConfig}
                    onClick={() => router.visit(previousConfig?.currentStepRoute)}
                >
                    {`Précédent`}
                </Button>
                <Button
                    disabled={!nextConfig}
                    onClick={() => router.visit(nextConfig?.currentStepRoute)}
                >
                    {`Suivant`}
                </Button>
            </Group>
        </Stack>
    )
}
