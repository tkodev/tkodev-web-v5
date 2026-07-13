'use client'

import { useEffect, type FC } from 'react'
import { personEntryById } from '@/constants/profile'
import { consoleSignal } from '@/constants/system'

const styles = {
  stamp: 'background:#fafafa;color:#000;font:700 12px ui-monospace,monospace;padding:2px 6px',
  message: 'color:#a1a1aa;font:12px ui-monospace,monospace',
  label: 'color:#71717a;font:12px ui-monospace,monospace',
  channel: 'color:#fafafa;font:12px ui-monospace,monospace'
}

const Signal: FC = () => {
  // hooks
  useEffect(() => {
    const tony = personEntryById['tony']
    const { email, github, linkedin } = tony.extended ?? {}
    const channels = [email, github, linkedin].filter(Boolean).join('   ')

    console.log(`%c${consoleSignal.stamp}`, styles.stamp)
    console.log(`%c${consoleSignal.message}`, styles.message)
    console.log(`%c${consoleSignal.prompt} → %c${channels}`, styles.label, styles.channel)
  }, [])

  // jsx
  return null
}

export { Signal }
