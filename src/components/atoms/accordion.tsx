'use client'

import { forwardRef } from 'react'
import type { ComponentPropsWithoutRef, ComponentRef } from 'react'
import { ChevronDownIcon } from 'lucide-react'
import { Accordion as AccordionPrimitive } from 'radix-ui'
import { cn, cva } from '@/utils/theme'

const styles = {
  content: cva(
    'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm'
  ),
  contentInner: cva('pt-0 pb-4'),
  item: cva('border-b last:border-b-0'),
  trigger: cva(
    'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180'
  ),
  triggerIcon: cva(
    'text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200'
  )
}

type AccordionRef = ComponentRef<typeof AccordionPrimitive.Root>
type AccordionProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>

const Accordion = forwardRef<AccordionRef, AccordionProps>((props, ref) => {
  // jsx
  return <AccordionPrimitive.Root ref={ref} {...props} />
})
Accordion.displayName = 'Accordion'

type AccordionItemRef = ComponentRef<typeof AccordionPrimitive.Item>
type AccordionItemProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>

const AccordionItem = forwardRef<AccordionItemRef, AccordionItemProps>((props, ref) => {
  // props
  const { className, ...rest } = props

  // jsx
  return <AccordionPrimitive.Item ref={ref} className={cn(styles.item({ className }))} {...rest} />
})
AccordionItem.displayName = 'AccordionItem'

type AccordionTriggerRef = ComponentRef<typeof AccordionPrimitive.Trigger>
type AccordionTriggerProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>

const AccordionTrigger = forwardRef<AccordionTriggerRef, AccordionTriggerProps>((props, ref) => {
  // props
  const { children, className, ...rest } = props

  // jsx
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger ref={ref} className={cn(styles.trigger({ className }))} {...rest}>
        {children}
        <ChevronDownIcon className={cn(styles.triggerIcon())} />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
})
AccordionTrigger.displayName = 'AccordionTrigger'

type AccordionContentRef = ComponentRef<typeof AccordionPrimitive.Content>
type AccordionContentProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>

const AccordionContent = forwardRef<AccordionContentRef, AccordionContentProps>((props, ref) => {
  // props
  const { children, className, ...rest } = props

  // jsx
  return (
    <AccordionPrimitive.Content ref={ref} className={cn(styles.content())} {...rest}>
      <div className={cn(styles.contentInner({ className }))}>{children}</div>
    </AccordionPrimitive.Content>
  )
})
AccordionContent.displayName = 'AccordionContent'

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
export type {
  AccordionContentProps,
  AccordionContentRef,
  AccordionItemProps,
  AccordionItemRef,
  AccordionProps,
  AccordionRef,
  AccordionTriggerProps,
  AccordionTriggerRef
}
