// Transition utilities
import { motion } from 'framer-motion'
// Variants for component animation
import { elementMotion } from '../utils/animation'

const Section = ({ children }) => {
  
  return (
    <motion.section
      className='flex flex-col my-6'
      variants={elementMotion}
      initial='in'
      animate="hide"
      whileInView="show"
      exit="out"
      viewport={{ amount: 0.3 }}
    >
      { children }
    </motion.section>
  )
}

export default Section