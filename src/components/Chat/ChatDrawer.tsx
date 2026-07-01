import { useState, type ReactNode } from 'react'
import styles from './ChatDrawer.module.css'

export function ChatDrawer({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className={styles.backdrop} data-open={isOpen} onClick={() => setIsOpen(false)} />
      <div className={styles.wrapper} data-open={isOpen}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={() => setIsOpen(false)}
          aria-label="Close chat"
        >
          Close ✕
        </button>
        {children}
      </div>
      {!isOpen && (
        <button
          type="button"
          className={styles.fab}
          onClick={() => setIsOpen(true)}
          aria-expanded={isOpen}
        >
          Chat with me
        </button>
      )}
    </>
  )
}
