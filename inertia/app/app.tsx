/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />
/// <reference path="../../config/auth.ts" />

import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { createInertiaApp } from '@inertiajs/react'
import { hydrateRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import '../css/app.css'
import '@mantine/core/styles.css'
import AppLayout from '~/layouts/app-layout'
import { SharedProps } from '@adonisjs/inertia/types'

const appName = import.meta.env.VITE_APP_NAME || 'Webuild Up'

createInertiaApp({
    progress: { color: '#5468FF' },

    title: (title) => `${title} - ${appName}`,

    resolve: async (name) => {
        const page: any = await resolvePageComponent(
            `../pages/${name}.tsx`,
            import.meta.glob('../pages/**/*.tsx')
        )

        page.default.layout =
            page.default.layout ??
            ((page: React.JSX.Element) => (
                <AppLayout {...(page.props as SharedProps)}>{page}</AppLayout>
            ))

        return page
    },

    setup({ el, App, props }) {
        hydrateRoot(
            el,
            <MantineProvider>
                <App {...props} />
            </MantineProvider>
        )
    },
})
