import { clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'
import type { ClassValue } from 'clsx'

// register the theme.css font-size ramps so twMerge doesn't classify them as text colors
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: ['h1', 'h2', 'h3', 'h4', 'h5', 'e1', 'e2', 'e3', 'e4', 'e5', 'md'] }]
    }
  }
})

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export { cn }
export { cva } from 'class-variance-authority'
export type { VariantProps } from 'class-variance-authority'
