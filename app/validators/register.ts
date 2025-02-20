import User from '#models/user'
import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
    vine.object({
        username: vine.string().maxLength(255).unique({ table: User.table, column: 'username' }),
        email: vine
            .string()
            .maxLength(255)
            .email()
            .normalizeEmail()
            .unique({ table: User.table, column: 'email' }),
        password: vine.string().minLength(8).maxLength(255),
        // confirmPassword: vine.string().equals(vine.ref('password')).required(),
    })
)
