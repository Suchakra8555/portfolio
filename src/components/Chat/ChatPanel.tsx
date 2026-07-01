import { ChatInput } from './ChatInput'
import styles from './ChatPanel.module.css'
import { MessageList } from './MessageList'
import { QuickOptions } from './QuickOptions'
import { useChat } from './useChat'

interface ChatPanelProps {
  onMessageSent?: () => void
  onResponseReceived?: () => void
}

export function ChatPanel({ onMessageSent, onResponseReceived }: ChatPanelProps) {
  const { messages, loading, error, sendMessage } = useChat({ onMessageSent, onResponseReceived })

  return (
    <div className={styles.panel}>
      <h2 className={styles.heading}>Ask me anything</h2>
      <MessageList messages={messages} loading={loading} />
      {error && <p className={styles.error}>{error}</p>}
      <QuickOptions onSelect={sendMessage} disabled={loading} />
      <ChatInput onSend={sendMessage} disabled={loading} />
    </div>
  )
}
