import type { VercelRequest, VercelResponse } from '@vercel/node'
import { buildSystemPrompt } from '../src/data/resumeToPrompt'

const GROQ_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions'
const GROQ_MODEL = 'llama-3.3-70b-versatile'
const MAX_MESSAGE_LENGTH = 2000
const MAX_HISTORY_TURNS = 10

type ChatRole = 'user' | 'assistant'
interface HistoryTurn {
  role: ChatRole
  content: string
}

interface GroqChoice {
  message?: { content?: string }
}
interface GroqResponseBody {
  choices?: GroqChoice[]
}

function isHistoryTurn(value: unknown): value is HistoryTurn {
  if (typeof value !== 'object' || value === null) return false
  const turn = value as Record<string, unknown>
  return (
    (turn.role === 'user' || turn.role === 'assistant') && typeof turn.content === 'string'
  )
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const body = req.body as { message?: unknown; history?: unknown }
  const message = typeof body?.message === 'string' ? body.message.trim() : ''

  if (!message) {
    res.status(400).json({ error: 'A message is required.' })
    return
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    res.status(400).json({ error: 'Message is too long.' })
    return
  }

  const rawHistory = Array.isArray(body?.history) ? body.history : []
  const history: HistoryTurn[] = rawHistory.filter(isHistoryTurn).slice(-MAX_HISTORY_TURNS)

  const apiKey = process.env.GROQ_API_KEY
  if (!apiKey) {
    console.error('GROQ_API_KEY is not set')
    res.status(500).json({ error: 'The assistant is not configured yet. Please try again later.' })
    return
  }

  try {
    const groqResponse = await fetch(GROQ_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [
          { role: 'system', content: buildSystemPrompt() },
          ...history,
          { role: 'user', content: message },
        ],
        temperature: 0.6,
        max_tokens: 400,
      }),
    })

    if (groqResponse.status === 429) {
      const errorText = await groqResponse.text()
      console.error('Groq rate limit:', errorText)
      res.status(429).json({ error: "I'm getting a lot of questions right now, try again in a moment." })
      return
    }

    if (!groqResponse.ok) {
      const errorText = await groqResponse.text()
      console.error('Groq error:', groqResponse.status, errorText)
      res.status(502).json({ error: 'Something went wrong reaching the assistant. Please try again.' })
      return
    }

    const data = (await groqResponse.json()) as GroqResponseBody
    const reply = data.choices?.[0]?.message?.content?.trim()

    if (!reply) {
      console.error('Groq response missing content:', JSON.stringify(data))
      res.status(502).json({ error: 'Something went wrong reaching the assistant. Please try again.' })
      return
    }

    res.status(200).json({ reply })
  } catch (err) {
    console.error('Chat handler failure:', err)
    res.status(500).json({ error: 'Something went wrong reaching the assistant. Please try again.' })
  }
}
