import { useCallback, useState } from 'react'
import type { ChatErrorBody, ChatMessage, ChatRequestBody, ChatResponseBody } from './chat.types'

let idCounter = 0
function nextId() {
  idCounter += 1
  return `msg-${idCounter}`
}

interface UseChatOptions {
  onMessageSent?: () => void
  onResponseReceived?: () => void
}

export function useChat({ onMessageSent, onResponseReceived }: UseChatOptions = {}) {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim()
      if (!trimmed || loading) return

      const userMessage: ChatMessage = { id: nextId(), role: 'user', content: trimmed }
      const history = messages.slice(-10).map(({ role, content }) => ({ role, content }))

      setMessages((prev) => [...prev, userMessage])
      setError(null)
      setLoading(true)
      onMessageSent?.()

      try {
        const requestBody: ChatRequestBody = { message: trimmed, history }
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestBody),
        })

        if (!response.ok) {
          const body = (await response.json().catch(() => null)) as ChatErrorBody | null
          throw new Error(body?.error ?? 'Something went wrong reaching the assistant.')
        }

        const data = (await response.json()) as ChatResponseBody
        setMessages((prev) => [...prev, { id: nextId(), role: 'assistant', content: data.reply }])
        onResponseReceived?.()
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : 'Something went wrong reaching the assistant. Please try again.',
        )
      } finally {
        setLoading(false)
      }
    },
    [messages, loading, onMessageSent, onResponseReceived],
  )

  return { messages, loading, error, sendMessage }
}
