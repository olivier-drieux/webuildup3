import { SharedProps } from '@adonisjs/inertia/types'
import { Head, Link, useForm } from '@inertiajs/react'
import { Button } from '@mantine/core'

export default function Login(props: SharedProps) {
    const form = useForm({
        identifier: '',
        password: '',
        rememberMe: false,
    })

    return (
        <>
            <Head title="Login" />
            <Button>Test</Button>
            <Link href="/register" replace className="text-blue-500 hover:underline">
                Register
            </Link>
        </>
    )
}

// Login.layout = page => <AppLayout children={page}  />;
