import { useEffect, useRef } from 'react'
import type { ChatMessage as ChatMessageType } from './chat.types'
import { ChatMessage } from './ChatMessage'
import styles from './MessageList.module.css'

interface MessageListProps {
  messages: ChatMessageType[]
  loading: boolean
}

export function MessageList({ messages, loading }: MessageListProps) {
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages, loading])

  return (
    <div className={styles.list} aria-live="polite">
      {messages.length === 0 && !loading && (
        <p className={styles.empty}>
          Ask me anything about my experience, projects, or background.
        </p>
      )}
      {messages.map((message) => (
        <ChatMessage message={message} key={message.id} />
      ))}
      {loading && (
        <div className={styles.typing} aria-label="Assistant is typing">
          <span />
          <span />
          <span />
        </div>
      )}
      <div ref={endRef} />
    </div>
  )
}
