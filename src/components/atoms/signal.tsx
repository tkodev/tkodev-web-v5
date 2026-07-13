'use client'

import { useEffect, type FC } from 'react'
import { personEntryById } from '@/constants/profile'
import { consoleSignal } from '@/constants/system'

const styles = {
  stamp: 'background:#fafafa;color:#000;font:700;padding:6px 6px;',
  message: 'background:#fafafa;color:#000;padding:6px 6px;',
  label: 'background:#fafafa;color:#000;padding:6px 6px;'
}

const Signal: FC = () => {
  // hooks
  useEffect(() => {
    const tony = personEntryById['tony']
    const { email, phone, linkedin } = tony.extended ?? {}
    const channels = [linkedin, email, phone].filter(Boolean).join('   ')

    console.log(`%c${consoleSignal.stamp}`, styles.stamp)
    console.log(`%c${consoleSignal.message}`, styles.message)
    console.log(`%c${consoleSignal.prompt} → ${channels}`, styles.label)
  }, [])

  // jsx
  return null
}

export { Signal }
