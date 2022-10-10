import { theme1 } from './theme1'
import { theme2 } from './theme2'

const themes: any = {
    theme1,
    theme2,
}

export default function getTheme(theme: string) {
    return themes[theme]
}