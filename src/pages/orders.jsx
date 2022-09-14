import React from 'react'
import { Link } from 'react-router-dom'

// Libraries and utilities
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'

import ScrollTo from 'react-scroll-into-view'

import Container from '../components/container'
import Section from '../components/section'
import Alert from '../components/alert'
import Image from '../components/image'

import { images } from '../utils/images'

import { rgb } from '../utils/elements'
import styles from './orders.module.scss'

const TaskNav = () => {
  return (
    <nav className="task-nav">
      <ScrollTo selector={`#sign-in`} alignToTop={true} className="task-nav__link">
        <span className='scroll-link'>Sign In</span>
        <Icon icon="ph:user-circle-duotone" width="24" style={{ display: 'inline-block', marginLeft: '5px' }} inline={true} className="scroll-icon" />
      </ScrollTo>
      <ScrollTo selector={`#check-email`} alignToTop={true} className="task-nav__link">
        <span className='scroll-link'>Check Email</span> 
        <Icon icon="ph:envelope-duotone" width="24" style={{ display: 'inline-block', marginLeft: '5px' }} inline={true} className="scroll-icon" /> 
      </ScrollTo>
      <ScrollTo selector={`#print-packing-slips`} alignToTop={true} className="task-nav__link">
        <span className='scroll-link'>Packing Slips</span>
        <Icon icon="ph:file-doc-duotone" width="24" style={{ display: 'inline-block', marginLeft: '5px' }} inline={true} className="scroll-icon" />
      </ScrollTo>
      <ScrollTo selector={`#download-labels`} alignToTop={true} className="task-nav__link">
        <span className='scroll-link'>Shipping Labels</span>
        <Icon icon="ph:package-duotone" width="24" style={{ display: 'inline-block', marginLeft: '5px' }} inline={true} className="scroll-icon" />
      </ScrollTo>
      <ScrollTo selector={`#print-labels`} alignToTop={true} className="task-nav__link">
        <span className='scroll-link'>Printing</span>
        <Icon icon="ph:printer-duotone" width="24" style={{ display: 'inline-block', marginLeft: '5px' }} inline={true} className="scroll-icon" />
      </ScrollTo>
    </nav>
  )
}

const Orders = () => {
  return (
    <>
      <Helmet>
        <title>Daily Order Fulfillment</title>
      </Helmet>
      <Container>
        <main id={styles.warehouse} className='container'>
          <TaskNav />

          <Section>
            <div className='flex flex-col'>
              <h1 className="title">Warehouse</h1>
              <h6 className="sub-title">Shipping & Receiving + Inventory Management</h6>
            </div>

            <div className='flex flex-col'>
              <h2 className='mb-3 border-b border-b-slate-400/50'>Daily Order Fulfillment</h2>
              <p>The primary focus of warehouse is getting the products into the hands of customers, and the most important part of that is fulfilling every order correctly and efficiently, while keeping inventory under control. These instructions are a detailed step-by-step guide showing the process we use to do this on a daily basis.</p>

              <h4>Printing Orders and Shipping Labels</h4>
              
              <p className='mt-0'>The first task to get done every morning is printing the packing slips and shipping labels that will be used to fulfill each order that was placed since the day before. We can complete this process easily on the warehouse computer using the web browser, <a href="https://chrome.google.com" target="_blank">Google Chrome</a>, and <a href="https://adobe.com" target="_blank">Adobe Acrobat</a>.</p>
            </div>
          </Section>
          
          <Section>
            <div className="flex-content">
              <div className='flex-none flex justify-center'>
                <Icon icon="ph:google-chrome-logo-duotone" width="100" inline={true} />
              </div>
              <div className='flex flex-1 flex-col'>
                <h4 className='mb-2'>Open Chrome</h4>
                <p className='mt-4'>When you first open Chrome, you may be prompted to select which profile you would like to use. Be sure to click on the <span className="font-semibold">"Dip Devices Warehouse"</span> option, which will have all of your site data, logins, and bookmarks saved for a smoother workflow.</p>
              </div>
            </div>
          </Section>
          
          <Section>
            <div id="sign-in" className="grid grid-cols-1 md:grid-cols-3 gap-8 my-4">
              <div className='flex flex-col items-start pt-6 order-2 md:order-1'>
                <h5 className='md:self-end'>Select Profile</h5>
                <p className='md:text-right text-sm'>Make sure the browser profile for <span className='font-semibold'>‘warehouse@dipdevices.com’</span> is selected.</p>
                <div className='hidden md:flex self-end'>
                  <motion.div className="select-profile-icon"
                    initial={{ x: '-50px', opacity: 0 }}
                    whileInView={{ x: '0', opacity: 1, transition: { type: 'spring', bounce: 0.75, delay: 0.65, duration: 1.2 } }}
                    viewport={{ amount: 0.8 }}
                  >
                    <Icon icon="ph:arrow-square-right-duotone" width="90" color={rgb.dipYellow} stroke="black" strokeWidth={5} strokeOpacity="0.8" />
                  </motion.div>
                </div>
              </div>
              <div id="profile-select-image" className="order-1 md:order-2">
                <figure className='mx-auto w-1/2 md:w-full'>
                  <Image src={images.selectProfile} width="613" height="571" style={{ objectFit: 'cover' }} alt="Login to Warehouse Chrome profile" />
                </figure>
              </div>
              <div id="how-to-login" className='md:pt-6 order-3'>
                <Alert>
                  <h5 className='my-auto'>How to Login</h5>
                </Alert>
                  <p className='text-sm'>If you are logged out for some reason, click the "Add" button and follow the prompts to login to the <span className='font-semibold'>warehouse@dipdevices.com</span> Gmail account.</p>
              </div>
            </div>
          </Section>

          <Section>
            <div id="check-email" className="flex-content">
              <div className='flex-1'>
                <h5 className='mb-4'>Check Gmail Inbox</h5>
                <figure className='view-mobile my-6'>
                  <Image src={images.email} width="1276" height="284"  style={{ minBlockSize: '35vmin', objectFit: 'cover', objectPosition: 'center left' }} alt="Check the warehouse Gmail account for new orders" />
                </figure>
                <p>Navigate to <a href="https://gmail.com" target="_blank">gmail.com</a>, which should bring you into the warehouse inbox if the browser is logged in. Look for the new emails containing the daily order summaries and shipping labels.</p>
              </div>

              <div className='hidden lg:flex lg:flex-[2] lg:w-2/3'>
                <figure>
                  <Image src={images.email} width="1276" height="284"  style={{ objectPosition: 'bottom left' }} alt="Check the warehouse Gmail account for new orders" />
                </figure>
              </div>
            </div>
          </Section>

          <Section>
            <div id="print-packing-slips" className="flex-content">
              <div className='flex-1'>
                <div className="task-heading">
                  <h3>Print Packing Slips</h3>
                </div>
                <figure className='view-mobile my-6'>
                  <Image src={images.printPacking} width="1018" height="588" style={{ objectFit: 'cover' }} alt="Print the packing slips attached to the email." />
                </figure>
                <p>Open email titled <span className='font-semibold'>“Orders from [date] for Dip Devices”</span> from MH Digital Group, then open the attached PDF. This is a multi-page file containing packing slips for each of the orders placed the day before and overnight, along with the SKU Summary, which lists each product and the quantities you will need to fulfill these orders.</p>
                <p>Open the attached PDF in the browser, then click the Print icon (or <span className="font-semibold">Ctrl+P</span>) </p>
              </div>

              <div className='hidden lg:flex flex-1'>
                <figure>
                  <Image src={images.printPacking} width="1018" height="588" style={{ objectFit: 'cover', objectPosition: 'right' }} alt="Print the packing slips attached to the email." />
                </figure>
              </div>
            </div>
          </Section>
            
          <Section>
            <div id="download-labels" className="flex-content">
              <div className='flex-1'>
                <h3>Download Shipping Labels</h3>

                <figure className='view-mobile my-6'>
                  <Image src={images.emailAttach} style={{ objectPosition: 'right' }} alt="Download all the shipping labels attached to the email." />
                </figure>

                <p>Next, open email titled <span className='font-semibold'>“Labels [number] - [number]”</span> from Amber Swiney, which will have multiple attachments. Download all of these attachments as one .zip file by clicking the <span className='font-semibold'>“Download All Attachments”</span> icon found in the top right corner of the attachments section of the email.</p>

                <figure className='view-mobile my-6'>
                  <Image src={images.showFolder} style={{ objectPosition: 'left bottom' }} alt="Open the zip file containing the shipping labels." />
                </figure>

                <p>You should see the file in the download toolbar that appears at the bottom of the browser window. Once downloaded, click the arrow next to the file on the right, and select <span className='font-semibold'>“Show in Folder”</span>. This will open the File Explorer window to the downloads folder where it is located.</p>
              </div>

              <div className='hidden flex-1 lg:flex flex-col gap-4'>
                <figure>
                  <Image src={images.emailAttach} style={{ objectPosition: 'right' }} alt="Download all the shipping labels attached to the email." />
                </figure>
                
                <figure>
                  <Image src={images.showFolder} style={{ objectPosition: 'bottom' }} alt="Open the zip file containing the shipping labels." />
                </figure>
              </div>
            </div>
          </Section>

          <Section>
            <h4>Extract and Combine</h4>
            <p>Right click on the file in the Explorer window and select <span className="font-semibold">“Extract All...”</span>.</p>
            <p>In the window that pops up, click <span className='font-semibold'>“Extract”</span> in the bottom right, or just hit Enter. This will extract all of the labels into a folder that should open automatically.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-8'>
              <figure style={{ minBlockSize: '30vmin' }}>
                <Image src={images.extractAll} alt="Extract the labels from the zip into individual files." />
              </figure>

              <figure style={{ minBlockSize: '30vmin' }}>
                <Image src={images.combineFiles} alt="Select all the files and open them in Acrobat." />
              </figure>
              
              <div>
                <p>Select all the files in the folder <span className='font-semibold'>(Ctrl+A)</span>, with the exception of any Commercial Invoice file(s). With all these selected, right click and select <span className='font-semibold'>“Combine Files in Acrobat”</span></p>

                <p>This opens all of the files as a batch in Adobe Acrobat. Once this loads, just click <span className='font-semibold'>"Combine"</span> in the top right corner of the window.</p>
              </div>
              <figure>
                <Image src={images.combineButton} style={{ objectFit: 'cover', objectPosition: 'right' }} alt="Click 'Combine' to collate the files into a printable list of labels." />
              </figure>
            </div>
          </Section>

          <Section>
            <div className="flex-content">
              <div className="flex-1 flex flex-col sm:flex-row lg:flex-col gap-4">
                <figure className='w-full sm:w-1/2 lg:w-full mb-4' style={{ minBlockSize: '20vmin' }}>
                  <Image src={images.comInvoice} alt="Check your label files for commercial invoices" />
                </figure>
                <figure className='w-full sm:w-1/2 lg:w-full' style={{ minBlockSize: '20vmin' }}>
                  <Image src={images.comInvSign} style={{ objectFit: 'cover', objectPosition: 'bottom' }} alt="Sign the bottom of each copy" />
                </figure>
              </div>
              <div className='flex-[2]'>
                <Alert>
                  <span className="font-semibold">Commercial Invoices!</span>
                </Alert>
                <p>Take a look at your files, and if any of them are named <span className='font-semibold'>"ci_..."</span>, this is NOT a label! It is a commercial invoice, which must always be included with UPS international shipments. If you see any of these files, open them separately and print <span className='font-semibold'>3 copies</span> of each invoice. These will go on the outside of the package, in one of the re-sealable sleeves that can be found on the supply rack to right of the packing station, on the second shelf down next to the tape refills. Grab a sleeve, fold the invoices in half, put them in the sleeve and stick it to the outside of your package, making sure not to obscure the shipping label. Don't forget to sign the bottom of each copy before placing them in the sleeve.</p>
              </div>
            </div>
          </Section>

          <Section>
            <div id="print-labels" className='flex flex-col'>
              <h3>Print Shipping Labels</h3>
              <p>With the labels combined into one paginated file, click the Print Icon (or <span className='font-semibold'>CTRL+P</span>)  <Icon icon="ph:printer-duotone" width="30" inline={true} className="inline-block ml-3 -mb-1" /></p>
              <p className="text-sm mt-0">Make sure you select the printer <span className="font-semibold">Brother QL-1100</span> when printing labels.</p>
            </div>
          </Section>
          
          <Section>
            <Alert>
              <span className='font-semibold'>Reminder!</span> Don't forget to check the label printer to ensure that it is turned on!
            </Alert>

            <h3>Stack & Pack</h3>
            <div className="flex-content">
              <div className='flex-1'>
                <p>Once you've printed your labels and packing slips, gather them up and make sure they are in order, with the newest being on top. Flip through the packing slips while keeping an eye out for any large quantities - if you find a wholesale or distribution order, it may not have a shipping label printed yet. Set it aside so it doesn't interrupt your workflow packing the other orders. You will have to create shipping labels for these, but wait until after you pack them, so you can determine the weight and dimensions of the package(s).</p>
              </div>
              <div className="flex-1">
                <figure>
                  <Image src={images.specialShipping} alt="Orders that need shipping labels created after packing." />
                </figure>
              </div>
            </div>
          </Section>

          <Section>
            <p>You can usually find a list of the orders like this included in the email with the shipping labels. Consult with the warehouse or operations manager to see if any of these orders require special attention, and ask them to double check the items and quantities listed on the packing slips for these orders before packing or shipping them out.</p>
            <p>When these orders are ready to ship, follow the directions explained in <Link to="">Special Order Fulfillment</Link>, which will show you how to print labels for these orders using <a href="https://shippo.com" target="_blank">Shippo</a>.</p>
          </Section>

          <Section>
            <div className="flex-content">
              <p>Now you have everything you need to get your orders ready to be shipped. Take your packing slips and labels, head to the warehouse, and start packing.</p>
              <h5 className="text-right">Next Step: <Link to="" style={{ lineHeight: '1.618' }}>Packing Orders</Link></h5>
            </div>
          </Section>
        </main>
      </Container>
    </>
  )
}

export default Orders