import type { ChatMessage as ChatMessageType } from './chat.types'
import styles from './ChatMessage.module.css'

export function ChatMessage({ message }: { message: ChatMessageType }) {
  // Show a typing placeholder when the assistant is thinking
  if (message.content === '<think>') {
    return (
      <div className={styles.row} data-role={message.role}>
        <div className={styles.bubble}>
          <span className={styles.typing}></span>
        </div>
      </div>
    )
  }
  return (
    <div className={styles.row} data-role={message.role}>
      <div className={styles.bubble}>{message.content}</div>
    </div>
  )
}
