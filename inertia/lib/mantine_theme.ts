import { generateColors } from '@mantine/colors-generator'
import { createTheme } from '@mantine/core'

const mantineTheme = createTheme({
    colors: {
        primary: generateColors('#ff7900'),
        secondary: generateColors('#0086FF'),
    },
    primaryColor: 'primary',
})

export default mantineTheme
