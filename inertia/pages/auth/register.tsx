import { SharedProps } from '@adonisjs/inertia/types'
import { Head, Link, useForm } from '@inertiajs/react'
import { Button } from '@mantine/core'

export default function Register(props: SharedProps) {
    const form = useForm({
        identifier: '',
        password: '',
        rememberMe: false,
    })

    return (
        <>
            <Head title="Register" />
            <Button component={Link} href="/login" replace>
                Login
            </Button>
        </>
    )
}
