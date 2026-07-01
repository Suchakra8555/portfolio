import type { Section } from '../../hooks/useActiveSection'

export type PlayMode = 'loop' | 'once'

export interface ClipConfig {
  src: string
  mode: PlayMode
}

function once(src: string): ClipConfig {
  return { src, mode: 'once' }
}

function shuffle<T>(items: readonly T[]): T[] {
  const shuffled = [...items]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Draws items in shuffled batches so every clip in the pool plays before any repeats,
// and avoids repeating the same clip back-to-back across a batch boundary.
function createShuffleBag<T>(items: readonly T[]): () => T {
  let bag: T[] = []
  let previous: T | undefined

  return () => {
    if (bag.length === 0) {
      bag = shuffle(items)
      if (items.length > 1 && bag[0] === previous) {
        ;[bag[0], bag[1]] = [bag[1], bag[0]]
      }
    }
    const value = bag.shift() as T
    previous = value
    return value
  }
}

export const APP_LOADED_CLIP: ClipConfig = once('/wave_hello_3.mp4')
export const CHAT_SENT_CLIP: ClipConfig = once('/waving_gesture.mp4')

const IDLE_CLIPS: ClipConfig[] = [
  once('/happy_idle.mp4'),
  once('/walk_sway.mp4'),
  once('/walk_swing_arms.mp4'),
  once('/floating.mp4'),
]
const nextIdleClip = createShuffleBag(IDLE_CLIPS)

const NAV_CLIP_POOLS: Record<Section, ClipConfig[]> = {
  about: ['catwalk_walk', 'standard_walk', 'walk_punch_kick_jump_walk', 'zombie_walk'].map(
    (name) => once(`/${name}.mp4`),
  ),
  experience: ['run', 'run_walk_jump_walk', 'running_jump', 'jump'].map((name) =>
    once(`/${name}.mp4`),
  ),
  projects: ['box_jump', 'jump_attack', 'boxing', 'jab_cross'].map((name) => once(`/${name}.mp4`)),
  education: ['jump_rope', 'skipping', 'hip_hop_dancing', 'hip_hop_dancing2'].map((name) =>
    once(`/${name}.mp4`),
  ),
  achievements: ['joyful_jump_l', 'punching_bag', 'shoot_gun', 'flying_kick'].map((name) =>
    once(`/${name}.mp4`),
  ),
}
const navClipBags = Object.fromEntries(
  (Object.keys(NAV_CLIP_POOLS) as Section[]).map((section) => [
    section,
    createShuffleBag(NAV_CLIP_POOLS[section]),
  ]),
) as Record<Section, () => ClipConfig>

const CHAT_RESPONSE_CLIPS: ClipConfig[] = [
  'dab_dance',
  'dance',
  'dance001',
  'dance002',
  'shuffle_dance',
  'hip_hop_dancing3',
].map((name) => once(`/${name}.mp4`))
const nextChatResponseClip = createShuffleBag(CHAT_RESPONSE_CLIPS)

export function getNextIdleClip(): ClipConfig {
  return nextIdleClip()
}

export function getNavClip(section: Section): ClipConfig {
  return navClipBags[section]()
}

export function getNextChatResponseClip(): ClipConfig {
  return nextChatResponseClip()
}
