import ProjectsController from '#controllers/projects_controller'
import { InferPageProps } from '@adonisjs/inertia/types'
import { Head, Link } from '@inertiajs/react'
import {
    Button,
    Center,
    Divider,
    Group,
    Loader,
    Table,
    TableScrollContainer,
    TableTbody,
    TableTd,
    TableTh,
    TableThead,
    TableTr,
    Title,
} from '@mantine/core'
import dayjs from 'dayjs'
import WhenVisible from '~/components/when-visible/when-visible'

export default function Projects(props: InferPageProps<ProjectsController, 'index'>) {
    console.log(props)
    return (
        <>
            <Head title="Liste des projets" />
            <Group w="100%" justify="space-between">
                <Title>{`Liste des projets`}</Title>
                <Button component={Link} href="/projects/create">
                    Créer un projet
                </Button>
            </Group>
            <Divider mt="md" mb="xl" />
            <TableScrollContainer minWidth={500}>
                <Table highlightOnHover withTableBorder stickyHeader style={{ overflow: 'auto' }}>
                    <TableThead>
                        <TableTr>
                            <TableTh>Nom</TableTh>
                            <TableTh>Auteur</TableTh>
                            <TableTh>Date de création</TableTh>
                            <TableTh>Date de dernière mise à jour</TableTh>
                        </TableTr>
                    </TableThead>
                    <TableTbody style={{ overflow: 'auto' }}>
                        {props.projects?.map((project) => (
                            <TableTr key={project.id}>
                                <TableTd>{project.name}</TableTd>
                                <TableTd>{`-`}</TableTd>
                                <TableTd>
                                    {dayjs(project.createdAt).format('DD/MM/YYYY H:m:s')}
                                </TableTd>
                                <TableTd>
                                    {dayjs(project.updatedAt).format('DD/MM/YYYY H:m:s')}
                                </TableTd>
                            </TableTr>
                        ))}
                        <TableTr>
                            <TableTh colSpan={4}>
                                <WhenVisible
                                    always={null !== props.meta.nextPageUrl}
                                    buffer={500}
                                    params={{
                                        only: ['projects', 'meta'],
                                        data: { page: (props.meta.currentPage ?? 1) + 1 },
                                    }}
                                >
                                    <Center>
                                        <Loader size="sm" />
                                    </Center>
                                </WhenVisible>
                            </TableTh>
                        </TableTr>
                    </TableTbody>
                </Table>
            </TableScrollContainer>
        </>
    )
}
