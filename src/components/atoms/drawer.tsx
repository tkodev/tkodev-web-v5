'use client'

import { type ComponentProps } from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'
import { Card } from '@/components/atoms/card'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  overlay: cva([
    'bg-background/80 fixed inset-0 z-20',
    'data-open:animate-in data-open:fade-in-0',
    'data-closed:animate-out data-closed:fade-out-0'
  ]),
  content: cva(
    [
      'group/drawer-content fixed z-20 flex flex-col',
      'text-sm',
      'data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0',
      'data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0',
      'data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0',
      'data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0'
    ],
    {
      variants: {
        size: {
          auto: [
            'h-auto',
            'data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh]',
            'data-[vaul-drawer-direction=bottom]:rounded-t-sm data-[vaul-drawer-direction=bottom]:border-t',
            'data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh]',
            'data-[vaul-drawer-direction=top]:rounded-b-sm data-[vaul-drawer-direction=top]:border-b',
            'data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:rounded-r-sm',
            'data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm',
            'data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:rounded-l-sm',
            'data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm'
          ],
          full: [
            'inset-0 h-full w-full rounded-none border-none',
            'data-[vaul-drawer-direction=bottom]:mt-0 data-[vaul-drawer-direction=bottom]:max-h-none',
            'data-[vaul-drawer-direction=top]:mb-0 data-[vaul-drawer-direction=top]:max-h-none',
            'data-[vaul-drawer-direction=left]:w-full data-[vaul-drawer-direction=left]:sm:max-w-none',
            'data-[vaul-drawer-direction=right]:w-full data-[vaul-drawer-direction=right]:sm:max-w-none'
          ]
        }
      },
      defaultVariants: {
        size: 'auto'
      }
    }
  ),
  handle: cva([
    'bg-muted mx-auto mt-4 hidden h-1 w-25 shrink-0 rounded-xs',
    'group-data-[vaul-drawer-direction=bottom]/drawer-content:block'
  ]),
  header: cva([
    'gap-xs p-md flex flex-col',
    'group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center',
    'group-data-[vaul-drawer-direction=top]/drawer-content:text-center',
    'md:text-left'
  ]),
  footer: cva('gap-sm p-md mt-auto flex flex-col'),
  title: cva('font-heading text-h5 text-foreground'),
  description: cva('text-muted-foreground text-sm')
}

const Drawer = (props: ComponentProps<typeof DrawerPrimitive.Root>) => {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />
}

const DrawerTrigger = (props: ComponentProps<typeof DrawerPrimitive.Trigger>) => {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

const DrawerPortal = (props: ComponentProps<typeof DrawerPrimitive.Portal>) => {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

const DrawerClose = (props: ComponentProps<typeof DrawerPrimitive.Close>) => {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

const DrawerOverlay = (props: ComponentProps<typeof DrawerPrimitive.Overlay>) => {
  // props
  const { className, ...rest } = props

  // jsx
  return (
    <DrawerPrimitive.Overlay
      className={cn(styles.overlay({ className }))}
      data-slot="drawer-overlay"
      {...rest}
    />
  )
}

type DrawerContentProps = ComponentProps<typeof DrawerPrimitive.Content> &
  VariantProps<typeof styles.content>

const DrawerContent = (props: DrawerContentProps) => {
  // props
  const { size, className, children, ...rest } = props

  // jsx
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <Card className={cn(styles.content({ size, className }))} asChild>
        <DrawerPrimitive.Content data-slot="drawer-content" {...rest}>
          <div className={cn(styles.handle())} />
          {children}
        </DrawerPrimitive.Content>
      </Card>
    </DrawerPortal>
  )
}

const DrawerHeader = (props: ComponentProps<'div'>) => {
  // props
  const { className, ...rest } = props

  // jsx
  return <div className={cn(styles.header({ className }))} data-slot="drawer-header" {...rest} />
}

const DrawerFooter = (props: ComponentProps<'div'>) => {
  // props
  const { className, ...rest } = props

  // jsx
  return <div className={cn(styles.footer({ className }))} data-slot="drawer-footer" {...rest} />
}

const DrawerTitle = (props: ComponentProps<typeof DrawerPrimitive.Title>) => {
  // props
  const { className, ...rest } = props

  // jsx
  return (
    <DrawerPrimitive.Title
      className={cn(styles.title({ className }))}
      data-slot="drawer-title"
      {...rest}
    />
  )
}

const DrawerDescription = (props: ComponentProps<typeof DrawerPrimitive.Description>) => {
  // props
  const { className, ...rest } = props

  // jsx
  return (
    <DrawerPrimitive.Description
      className={cn(styles.description({ className }))}
      data-slot="drawer-description"
      {...rest}
    />
  )
}

export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger
}
export type { DrawerContentProps }
