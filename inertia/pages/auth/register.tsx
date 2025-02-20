import { SharedProps } from '@adonisjs/inertia/types'
import { Head, Link, useForm } from '@inertiajs/react'

export default function Register(props: SharedProps) {
    const form = useForm({
        identifier: '',
        password: '',
        rememberMe: false,
    })

    return (
        <>
            <Head title="Register" />
            <Link href="/login" replace className="text-blue-500 hover:underline">
                Login
            </Link>
        </>
    )
}
