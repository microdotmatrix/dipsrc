// React utilities
import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet';

import { AnimatePresence } from 'framer-motion'

// Pages loaded into route switching component
const Index = React.lazy(() => import('./pages/index'))
const Labels = React.lazy(() => import('./pages/labels'))
const Orders = React.lazy(() => import('./pages/orders'))
const Other = React.lazy(() => import('./pages/other'))

// Layout component for global page structure
import Layout from './components/layout';

// Global stylesheet
import './styles/index.scss'
import MetaData from './components/metaData';

const App = () => { 
  // Path location variable for route switcher
  const location = useLocation(null)
  return (
    <>
      <Helmet>
        {/* Google Fonts */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,600;1,200;1,300;1,400;1,600&family=Oswald:wght@300;400;500;600&family=Work+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;1,200;1,300;1,400;1,500;1,600&display=swap" />
      </Helmet>
      <MetaData />
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<Index />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/labels' element={<Labels />} />
            <Route path='/other' element={<Other />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </>
  )
}

export default App