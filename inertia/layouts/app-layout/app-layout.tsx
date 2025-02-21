import { SharedProps } from '@adonisjs/inertia/types'
import { Link } from '@inertiajs/react'
import {
    AppShell,
    AppShellHeader,
    AppShellMain,
    AppShellNavbar,
    Box,
    Burger,
    Button,
    Group,
    Image,
    MantineProvider,
    Paper,
    Stack,
    Text,
    ThemeIcon,
    UnstyledButton,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { PropsWithChildren } from 'react'
import { LuFolderPlus, LuLayoutDashboard, LuLogOut } from 'react-icons/lu'
import ProjectStepper from '~/components/project-stepper/project-stepper'
import UserButton from '~/components/user-button/user-button'
import classes from './app-layout.module.css'

export default function AppLayout(props: PropsWithChildren<SharedProps>) {
    const [opened, { toggle }] = useDisclosure()

    return (
        <MantineProvider>
            <AppShell
                header={{ height: 60 }}
                navbar={{
                    width: 300,
                    breakpoint: 'sm',
                    collapsed: { desktop: !opened, mobile: !opened },
                }}
                padding="md"
            >
                <AppShellHeader>
                    <Group h="100%" justify="space-between">
                        <Group pl="md">
                            <Burger opened={opened} onClick={toggle} size="sm" />
                            <Image src="logo.png" alt="Logo" height={40} />
                            <Text fw="bold" fz="h4">
                                {import.meta.env.VITE_APP_NAME}
                            </Text>
                        </Group>
                        <ProjectStepper />
                    </Group>
                </AppShellHeader>
                <AppShellNavbar p="md">
                    <UnstyledButton className={classes.navItem} component={Link} href="/">
                        <Group justify="space-between" gap={0}>
                            <Box style={{ display: 'flex', alignItems: 'center' }}>
                                <ThemeIcon variant="light" size={30}>
                                    <LuLayoutDashboard size={18} />
                                </ThemeIcon>
                                <Box ml="md">{`Tableau de bord`}</Box>
                            </Box>
                        </Group>
                    </UnstyledButton>
                    <UnstyledButton className={classes.navItem} component={Link} href="/create">
                        <Group justify="space-between" gap={0}>
                            <Box style={{ display: 'flex', alignItems: 'center' }}>
                                <ThemeIcon variant="light" size={30}>
                                    <LuFolderPlus size={18} />
                                </ThemeIcon>
                                <Box ml="md">{`Créer un projet`}</Box>
                            </Box>
                        </Group>
                    </UnstyledButton>
                    <Paper component={Stack} withBorder p="md" mt="auto">
                        <UserButton user={props.user!} />
                        <Button
                            leftSection={<LuLogOut size={14} />}
                            component={Link}
                            href="/logout"
                            method="post"
                            variant="light"
                        >
                            {`Se déconnecter`}
                        </Button>
                    </Paper>
                </AppShellNavbar>
                <AppShellMain className={classes.main}>{props.children}</AppShellMain>
            </AppShell>
        </MantineProvider>
    )
}
