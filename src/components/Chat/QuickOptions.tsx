import styles from './QuickOptions.module.css'

const QUICK_PROMPTS = [
  'Tell me about your experience',
  'What projects have you built?',
  'What are your key skills?',
  'Where did you study?',
  "What's your biggest achievement?",
]

interface QuickOptionsProps {
  onSelect: (prompt: string) => void
  disabled: boolean
}

export function QuickOptions({ onSelect, disabled }: QuickOptionsProps) {
  return (
    <div className={styles.options}>
      {QUICK_PROMPTS.map((prompt) => (
        <button
          key={prompt}
          type="button"
          className={styles.option}
          onClick={() => onSelect(prompt)}
          disabled={disabled}
        >
          {prompt}
        </button>
      ))}
    </div>
  )
}
