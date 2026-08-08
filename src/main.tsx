import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootEl = document.getElementById('root')!
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Prerendered routes ship with markup already inside #root. Hydrate onto it
// instead of tearing it down and re-rendering, so crawlers and first paint
// see real content and real users don't get a flash of empty page.
if (rootEl.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootEl, app)
} else {
  ReactDOM.createRoot(rootEl).render(app)
}

