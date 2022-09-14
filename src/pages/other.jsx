import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animation';

import Container from '../components/container';
import Section from '../components/section';

const Other = () => {
  return (
    <>
      <Container>
        <main id="other" className='container'>
          <Section>
            <div className='flex flex-col'>
              <h1 className="title">More Useful Information</h1>
              <h6 className="sub-title"></h6>
            </div>
          </Section>
        </main>
      </Container>
    </>
  )
}

export default Other