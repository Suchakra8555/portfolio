import { useEffect, useRef, useState, type ReactNode } from 'react'
import styles from './ChatDrawer.module.css'

export function ChatDrawer({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const fabRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return
    closeRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  const close = () => {
    setIsOpen(false)
    // Return focus to the opener once it is back in the DOM.
    requestAnimationFrame(() => fabRef.current?.focus())
  }

  return (
    <>
      <div className={styles.backdrop} data-open={isOpen} onClick={close} />
      <div
        id="chat-drawer"
        className={styles.wrapper}
        data-open={isOpen}
        role="region"
        aria-label="Chat with the assistant"
      >
        <button ref={closeRef} type="button" className={styles.closeButton} onClick={close}>
          Close chat
        </button>
        {children}
      </div>
      {!isOpen && (
        <button
          ref={fabRef}
          type="button"
          className={styles.fab}
          onClick={() => setIsOpen(true)}
          aria-expanded={isOpen}
          aria-controls="chat-drawer"
        >
          Chat with me
        </button>
      )}
    </>
  )
}
