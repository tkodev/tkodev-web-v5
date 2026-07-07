import { Config } from 'tailwindcss'

type Theme = NonNullable<Config['theme']>

type ThemeMode = 'light' | 'dark'

export type { Theme, ThemeMode }
