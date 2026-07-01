import { useCallback, useState } from 'react'
import {
  APP_LOADED_CLIP,
  CHAT_SENT_CLIP,
  getNavClip,
  getNextChatResponseClip,
  getNextIdleClip,
  type ClipConfig,
} from '../components/Avatar/avatarClips'
import type { Section } from './useActiveSection'

export function useAvatarController() {
  const [clip, setClip] = useState<ClipConfig>(APP_LOADED_CLIP)

  const onNavChange = useCallback((section: Section) => {
    setClip(getNavClip(section))
  }, [])

  const onChatSent = useCallback(() => {
    setClip(CHAT_SENT_CLIP)
  }, [])

  const onChatResponseReceived = useCallback(() => {
    setClip(getNextChatResponseClip())
  }, [])

  const onClipEnded = useCallback(() => {
    setClip(getNextIdleClip())
  }, [])

  return { clip, onNavChange, onChatSent, onChatResponseReceived, onClipEnded }
}
