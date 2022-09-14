import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

// import reportWebVitals from './utils/vercel/reportWebVitals';
// import { sendToVercelAnalytics } from './utils/vercel/vitals';

import App from './App.jsx'

const app = createRoot(document.getElementById('root'))

app.render(
  <Router>
    <App />
  </Router>
)

// reportWebVitals(sendToVercelAnalytics);