import { ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import Header from './components/header/Header'
import { theme } from './material.theme'
import { store } from './redux'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App" id="app">
          <Header />
        </div>
      </ThemeProvider>
    </Provider>
  )
}

export default App
