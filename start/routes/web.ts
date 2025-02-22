const ProjectsController = () => import('#controllers/projects_controller')
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

/* ignore formmating, as I find it easier to scan single line route definitions */
/* prettier-ignore-start */

router.on('/').redirect('projects.index').as('home')
router
    .group(() => [
        router.get('/', [ProjectsController, 'index']).as('index').use(middleware.auth()),
        router.get('/create', [ProjectsController, 'create']).as('create').use(middleware.auth()),
    ])
    .as('projects')
    .prefix('projects')
    .use(middleware.auth())
