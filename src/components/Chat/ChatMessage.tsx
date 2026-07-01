import type { ChatMessage as ChatMessageType } from './chat.types'
import styles from './ChatMessage.module.css'

export function ChatMessage({ message }: { message: ChatMessageType }) {
  return (
    <div className={styles.row} data-role={message.role}>
      <div className={styles.bubble}>{message.content}</div>
    </div>
  )
}
