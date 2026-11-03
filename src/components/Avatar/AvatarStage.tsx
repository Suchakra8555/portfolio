import { useState } from 'react'
import type { ClipConfig } from './avatarClips'
import styles from './AvatarStage.module.css'

interface AvatarStageProps {
  clip: ClipConfig
  onEnded: () => void
}

function prefersReducedMotion() {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  } catch {
    return false
  }
}

export function AvatarStage({ clip, onEnded }: AvatarStageProps) {
  // Motion is opt-out: visitors who ask the OS for reduced motion start paused.
  const [paused, setPaused] = useState(prefersReducedMotion)

  return (
    <div className={styles.stage}>
      <video
        key={`${clip.src}-${paused}`}
        className={styles.video}
        src={clip.src}
        autoPlay={!paused}
        muted
        playsInline
        preload="metadata"
        loop={clip.mode === 'loop'}
        onEnded={clip.mode === 'once' ? onEnded : undefined}
        aria-label="Animated avatar of the site mascot"
      />
      <button
        type="button"
        className={styles.toggle}
        onClick={() => setPaused((value) => !value)}
        aria-pressed={paused}
      >
        {paused ? 'Play animation' : 'Pause animation'}
      </button>
    </div>
  )
}
