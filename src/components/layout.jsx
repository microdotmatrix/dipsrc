import ScrollToTop from 'react-scroll-up'
import { Icon } from '@iconify/react'

import NavMenu from './nav'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <NavMenu />
      
        {children}

      <ScrollToTop showUnder={160} smooth style={{
          position: 'fixed',
          bottom: '3.5rem',
          right: '1rem',
          width: '2rem',
          height: '2rem',
          borderRadius: '50%',
          background: 'rgba(20, 22, 20, 0.7)',
        }}>
          <Icon icon="mdi:arrow-up" width="100%" color="#ededed" className='scroll-to-top' />
        </ScrollToTop>
      
      <Footer />
    </>
  );
}
