import { ThemeProvider } from '@mui/material'
import Header from './components/header/Header'
import { theme } from './material.theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" id="app">
        <Header />
      </div>
    </ThemeProvider>
  )
}

export default App
