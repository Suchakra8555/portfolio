import type { ReactNode } from 'react'
import styles from './AppShell.module.css'

interface AppShellProps {
  header: ReactNode
  main: ReactNode
  aside: ReactNode
}

export function AppShell({ header, main, aside }: AppShellProps) {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>{header}</header>
      <div className={styles.body}>
        <main className={styles.main}>{main}</main>
        <aside className={styles.aside}>{aside}</aside>
      </div>
    </div>
  )
}
