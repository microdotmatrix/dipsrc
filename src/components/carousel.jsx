import React from 'react'
import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'

import imgLunars from '../assets/images/dip/lunars.png'
import imgLunarBlack from '../assets/images/dip/lunar-black.jpg'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/skyblue'

import styles from './carousel.module.scss'

const Carousel = () => {
  return (
    <motion.div initial={{ opacity: 0, y: '10px' }} animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }} exit={{ opacity: 0, y: '10px'}}>
      <Splide aria-label="My Favorite Images" options={{
        type: 'loop',
        rewind: true,
        easing: 'ease-in-out',
        autoplay: 'play',
        interval: 6000,
        speed: 300,
      }}> 
        <SplideSlide>
          <figure className={styles.carousel__slide}>
            <img src={imgLunars} alt="Image 1" />
            <div className="container relative">
              <figcaption className={styles.carousel__card}>
                <h2>Warehouse Guidelines</h2>
                <p>A comprehensive guide to daily operations, standard protocols, and how we keep Dip Devices running from behind the scenes.</p>
                <Link to="warehouse" className='btn'>Get Started</Link>
              </figcaption>
            </div>
          </figure>
        </SplideSlide>
        <SplideSlide>
          <figure className={styles.carousel__slide}>
            <img src={imgLunarBlack} alt="Image 2"/>
            <div className='container relative'>
              <figcaption className={styles.carousel__card}>
                <h2>Creating New Labels</h2>
                <p>Not every shipment we send out will have a label generated automatically. This guide will help break down the process of creating a new shipping label from scratch...</p>
                <Link to="warehouse" className='btn'>Read More...</Link>
              </figcaption>
            </div>
          </figure>
        </SplideSlide>
      </Splide>
    </motion.div>
  )
}

export default Carousel