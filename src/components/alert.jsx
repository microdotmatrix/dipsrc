import React from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

import styles from './alert.module.scss'

const Alert = ({ children }) => {
  return (
    <motion.blockquote className={styles.alert}  initial={{ y: '20px', opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: 0.3, delay: 0.3 } }} exit={{ y: '-20px', opacity: 0, transition: { duration: 0.5 } }} viewport={{ amount: 0.9 }}>
      <div className='flex-none'><Icon icon="ic:twotone-warning" width="60" /></div>
      <div className='flex-1 text-sm'>{children}</div>
    </motion.blockquote>
  )
}

export default Alert