import UserDto from '#dtos/user'
import {
    Avatar,
    ElementProps,
    Group,
    Text,
    UnstyledButton,
    UnstyledButtonProps,
} from '@mantine/core'
import clsx from 'clsx'
import classes from './user-button.module.css'

export default function UserButton({
    user,
    ...props
}: { user: UserDto } & UnstyledButtonProps & ElementProps<'button'>) {
    const splitUser = user.username.split(/[.-_ ]/)

    return (
        <UnstyledButton {...props} className={clsx(classes.user, props.className)}>
            <Group>
                <Avatar src={user.avatar} radius="xl">
                    {splitUser.slice(0, 2).map((name) => name[0].toUpperCase())}
                </Avatar>
                <div style={{ flex: 1 }}>
                    <Text size="sm" fw={500}>
                        {user.username}
                    </Text>
                    <Text c="dimmed" size="xs">
                        {user.email}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
    )
}
