import {
    AppShell,
    AppShellHeader,
    AppShellMain,
    AppShellNavbar,
    Burger,
    Group,
    MantineProvider,
    Skeleton,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { PropsWithChildren } from 'react'

export default function AppLayout(props: PropsWithChildren) {
    const [opened, { toggle }] = useDisclosure()
    return (
        <MantineProvider>
            <AppShell
                header={{ height: 60 }}
                navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
                padding="md"
            >
                <AppShellHeader>
                    <Group h="100%" px="md">
                        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    </Group>
                </AppShellHeader>
                <AppShellNavbar p="md">
                    Navbar
                    {Array(15)
                        .fill(0)
                        .map((_, index) => (
                            <Skeleton key={index} h={28} mt="sm" animate={false} />
                        ))}
                </AppShellNavbar>
                <AppShellMain>{props.children}</AppShellMain>
            </AppShell>
        </MantineProvider>
    )
}
