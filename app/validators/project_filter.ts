import vine from '@vinejs/vine'

export const projectFilterValidator = vine.compile(
    vine.object({
        sort: vine.string().optional(),
        sortDirection: vine.enum(['asc', 'desc']).optional(),
    })
)
