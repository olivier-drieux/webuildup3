import { SharedProps } from '@adonisjs/inertia/types'
import { Paper, Title } from '@mantine/core'
import classes from './auth-layout.module.css'

export default function AuthLayout(props: React.PropsWithChildren<SharedProps>) {
    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                    {`Bienvenue sur Webuild Up !`}
                </Title>
                {props.children}
            </Paper>
        </div>
    )
}
