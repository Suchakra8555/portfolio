import { AvatarStage } from './components/Avatar/AvatarStage'
import { ChatDrawer } from './components/Chat/ChatDrawer'
import { ChatPanel } from './components/Chat/ChatPanel'
import { Header } from './components/Header/Header'
import { MainPanel } from './components/MainPanel/MainPanel'
import { ThemeProvider } from './context/ThemeContext'
import { useActiveSection, type Section } from './hooks/useActiveSection'
import { useAvatarController } from './hooks/useAvatarController'
import { AppShell } from './layout/AppShell'

function App() {
  const { activeSection, setActiveSection } = useActiveSection()
  const avatar = useAvatarController()

  const handleNavSelect = (section: Section) => {
    setActiveSection(section)
    avatar.onNavChange(section)
  }

  return (
    <ThemeProvider>
      <AppShell
        header={<Header active={activeSection} onSelect={handleNavSelect} />}
        main={<MainPanel activeSection={activeSection} />}
        aside={
          <ChatDrawer>
            <AvatarStage clip={avatar.clip} onEnded={avatar.onClipEnded} />
            <ChatPanel
              onMessageSent={avatar.onChatSent}
              onResponseReceived={avatar.onChatResponseReceived}
            />
          </ChatDrawer>
        }
      />
    </ThemeProvider>
  )
}

export default App
