export type ChatRole = 'user' | 'assistant'

export interface ChatMessage {
  id: string
  role: ChatRole
  content: string
}

export interface ChatRequestBody {
  message: string
  history: { role: ChatRole; content: string }[]
}

export interface ChatResponseBody {
  reply: string
}

export interface ChatErrorBody {
  error: string
}
