import { ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { Router } from './components/router/Router'
import { theme } from './material.theme'
import { store } from './redux'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Provider>
  )
}

export default App
