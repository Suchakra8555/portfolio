import Markdown from 'markdown-to-jsx'
import type { ChatMessage as ChatMessageType } from './chat.types'
import styles from './ChatMessage.module.css'

// Raw HTML in the markdown source is treated as literal text rather than
// parsed, since the content comes from an LLM completion that can be
// influenced by user input.
const MARKDOWN_OPTIONS = { disableParsingRawHTML: true }

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
      <div className={styles.bubble}>
        {message.role === 'assistant' ? (
          <Markdown options={MARKDOWN_OPTIONS} className={styles.markdown}>
            {message.content}
          </Markdown>
        ) : (
          message.content
        )}
      </div>
    </div>
  )
}
