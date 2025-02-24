const ProjectsController = () => import('#controllers/projects_controller')
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

router.on('/').redirect('projects.index').as('home')
router
    .group(() => [
        router.get('/', [ProjectsController, 'index']).as('index'),
        router
            .group(() => [
                router.on('').redirect('projects.new.initialization').as('index'),
                router
                    .get('/intialization', [ProjectsController, 'initialization'])
                    .as('initialization'),
                router
                    .get('/company-information', [ProjectsController, 'companyInformation'])
                    .as('company_information'),
                router
                    .get('/customizations', [ProjectsController, 'customizations'])
                    .as('customizations'),
                router.get('/pages', [ProjectsController, 'pages']).as('pages'),
                router.get('/menus', [ProjectsController, 'menus']).as('menus'),
                router.get('/theme', [ProjectsController, 'theme']).as('theme'),
            ])
            .as('new')
            .prefix('new'),
    ])
    .as('projects')
    .prefix('projects')
    .use(middleware.auth())
