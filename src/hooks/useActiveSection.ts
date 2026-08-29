import { useCallback, useEffect, useState } from 'react'

export type Section =
  | 'about'
  | 'experience'
  | 'projects'
  | 'education'
  | 'achievements'
  | 'contact'
  | 'resume'

const SECTIONS: Section[] = [
  'about',
  'experience',
  'projects',
  'education',
  'achievements',
  'contact',
  'resume',
]
const DEFAULT_SECTION: Section = 'about'

function parseHash(hash: string): Section | null {
  const value = hash.replace('#', '') as Section
  return SECTIONS.includes(value) ? value : null
}

export function useActiveSection() {
  const [activeSection, setActiveSectionState] = useState<Section>(() => {
    const fromHash = parseHash(window.location.hash)
    if (fromHash) return fromHash
    // Visiting /resume directly (e.g. a shared link) opens straight to the resume view.
    if (window.location.pathname.replace(/\/$/, '') === '/resume') return 'resume'
    return DEFAULT_SECTION
  })

  useEffect(() => {
    const onHashChange = () => {
      const next = parseHash(window.location.hash)
      if (next) setActiveSectionState(next)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const setActiveSection = useCallback((section: Section) => {
    setActiveSectionState(section)
    window.history.replaceState(null, '', `#${section}`)
  }, [])

  return { activeSection, setActiveSection }
}
