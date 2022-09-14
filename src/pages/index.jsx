// Meta data management
import { Helmet } from 'react-helmet'

// Page/component animation utilities
import Container from '../components/container'
import Section from '../components/section'

// Carousel powered by SplideJs
// import Carousel from '../components/carousel'

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Dip Devices Operational Guidelines</title>
      </Helmet>
      <Container>
        <main className="container">
          <Section>
            <h1 className='title'>Dip Devices</h1>
            <h4 className="sub-title">Standard Operational Practices & Guidelines</h4>
            <p>This started out as a simple Google Doc, but when I began adding screenshots of what I was trying to explain, explanations got longer and more disorganized, so I decided to take a different approach. I like coding websites, and need more examples for my portfolio, so I made this. Now we have an in-depth, comprehensive reference source for how to do things on location at Dip Devices that can be accessed online, whenever, from anywhere. It is even optimized for mobile devices, so you can read through these guides from your phone.</p>
            <p>I've included links that will take you to the specific sites and web apps referenced in the guides, so as long as you are logged in on the office computer or a company Google profile, you can make use of them by simply following the link. </p>
          </Section>
        </main>
      </Container>
    </>
  )
}

export default Index