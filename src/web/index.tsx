import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import './normalize.css'

createRoot(document.getElementById('root') as HTMLDivElement).render(<App></App>)
