'use client'

import { type ComponentProps } from 'react'
import { ChevronDownIcon } from 'lucide-react'
import { Accordion as AccordionPrimitive } from 'radix-ui'
import { cn, cva } from '@/utils/theme'

const styles = {
  item: cva('border-b last:border-b-0'),
  header: cva('flex'),
  trigger: cva([
    'flex flex-1 items-center justify-between gap-4 py-4',
    'rounded-sm transition-all outline-none',
    'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-3',
    'disabled:pointer-events-none disabled:opacity-50',
    '[&[data-state=open]>svg]:rotate-180'
  ]),
  chevron: cva([
    'text-muted-foreground pointer-events-none size-4 shrink-0',
    'transition-transform duration-200'
  ]),
  content: cva([
    'overflow-hidden',
    'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
  ]),
  contentInner: cva('pb-4 text-sm')
}

const Accordion = (props: ComponentProps<typeof AccordionPrimitive.Root>) => {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

const AccordionItem = (props: ComponentProps<typeof AccordionPrimitive.Item>) => {
  const { className, ...rest } = props

  return (
    <AccordionPrimitive.Item
      className={cn(styles.item({ className }))}
      data-slot="accordion-item"
      {...rest}
    />
  )
}

const AccordionTrigger = (props: ComponentProps<typeof AccordionPrimitive.Trigger>) => {
  const { className, children, ...rest } = props

  return (
    <AccordionPrimitive.Header className={cn(styles.header())}>
      <AccordionPrimitive.Trigger
        className={cn(styles.trigger({ className }))}
        data-slot="accordion-trigger"
        {...rest}
      >
        {children}
        <ChevronDownIcon className={cn(styles.chevron())} />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

const AccordionContent = (props: ComponentProps<typeof AccordionPrimitive.Content>) => {
  const { className, children, ...rest } = props

  return (
    <AccordionPrimitive.Content
      className={cn(styles.content())}
      data-slot="accordion-content"
      {...rest}
    >
      <div className={cn(styles.contentInner({ className }))}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
