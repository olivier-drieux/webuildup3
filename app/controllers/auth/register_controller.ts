import WebRegister from '#actions/auth/http/web_register'
import { registerValidator } from '#validators/register'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

export default class RegisterController {
    async show({ inertia }: HttpContext) {
        return inertia.render('auth/register')
    }

    @inject()
    async store({ request, response, session }: HttpContext, webRegister: WebRegister) {
        const data = await request.validateUsing(registerValidator)
        await webRegister.handle({ data })

        session.flash('success', 'Your account has been created. You are now logged in.')

        return response.redirect().toPath('/')
    }
}
