import type { ClipConfig } from './avatarClips'
import styles from './AvatarStage.module.css'

interface AvatarStageProps {
  clip: ClipConfig
  onEnded: () => void
}

export function AvatarStage({ clip, onEnded }: AvatarStageProps) {
  return (
    <video
      key={clip.src}
      className={styles.video}
      src={clip.src}
      autoPlay
      muted
      playsInline
      loop={clip.mode === 'loop'}
      onEnded={clip.mode === 'once' ? onEnded : undefined}
    />
  )
}
