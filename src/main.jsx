import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { Providerc:\Users\devan\Documents\coding\projects\automation-system\src\redux } from 'react-redux'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
