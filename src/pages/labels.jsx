import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Container from '../components/container'
import Section from '../components/section'
import Image from '../components/image'

import { img_Labels } from '../utils/images'

import styles from './labels.module.scss'

const Labels = () => {
  return (
    <>
      <Helmet>
        <title>Creating Shipping Labels</title>
      </Helmet>
      <Container>
        <main id="labels" className='container'>
          <Section>
            <div className='flex flex-col'>
              <h1 className="title">Shipping Labels</h1>
              <h6 className="sub-title">Creating Labels for Special Orders</h6>
            </div>

            <div className='flex flex-col'>
              <p>We classify orders with three distinct identifiers: Retail, Wholesale, and Distribution. Most of your retail orders will have shipping labels generated automatically and included in your morning emails, but many wholesale orders and all distro orders will require you to purchase shipping once you have packed them up. You can use this guide as a quick reference to walk you through creating a custom label using our postage processing integration with Shopify, called <a href="http://apps.goshippo.com" target="_blank" rel="noopener noreferrer">Shippo.</a></p>
            </div>

            <h2 className="mb-3 border-b border-b-slate-400">Using Shippo</h2>

            <div className="flex-content">
              <div className='flex-1 w-full lg:w-3/4'>  
                <p>You can access the control panel for <a href="http://apps.goshippo.com" target="_blank" rel="noopener noreferrer">Shippo</a> by clicking the shortcut in the bookmarks toolbar (or just click the links here) and signing in with the saved login for mike@dipstickvapes.com. Click <span className="font-semibold">"Orders"</span> in the left navigation menu, then type the order number you would like to get a label for into the search field across the top. Hit Enter.</p>
              </div>
              <div className="flex-0 w-full lg:w-1/4">
                <figure className={styles.contentImg}>
                  <Image
                    src={img_Labels.shippoLink}
                    alt="To get to Shippo, click the shortcut in the bookmarks toolbar."
                    width="533"
                    height="139"
                    style={{ objectFit: 'none' }}
                  />
                </figure>
              </div>
            </div>

            <div className='flex-content'>
              <div className="flex-none w-full md:w-1/2 lg:w-1/3 flex flex-col gap-4">
                <figure className={styles.contentImg}>
                  <Image
                    src={img_Labels.createNewLabel}
                    alt="Select create new label from the dropdown in the order listing."
                    width="581"
                    height="283"
                    style={{ objectFit: 'none' }}
                  />
                </figure>
                <figure className={styles.contentImg}>
                  <Image
                    src={img_Labels.createLabelButton}
                    alt="Use the Create Label button to generate a new shipping label from scratch"
                    width="533"
                    height="139"
                    // style={{ objectFit: 'none' }}
                  />
                </figure>
              </div>
              <div className="flex-1 w-full md:w-1/2 lg:w-2/3">
                <p>If you have a wholesale order that has fulfilled along side your daily retail orders but still needs it's shipping label, it will usually appear in Shippo tagged as "Fulfilled outside of Shippo." This is usually caused by the app's integration with Shopify; you will still be generating your postage in Shippo. Click on the arrow button to the right of where it says "Fulfilled", then select <span className="font-semibold">Create Another Label</span>. This will duplicate the order details in a new form, so you can enter your package dimensions to select a shipping service.</p>
                <p>If you are creating a label entirely from scratch, not tied to an existing order number, you can click on the <span className="font-semibold">Create Label</span> button in the top right corner. This will bring you to an empty form to input the recipient's address and contact information. Fill this out, then continue to the next section.</p>
              </div>
            </div>
          </Section>

          <Section>
            <div className='flex flex-col'>
              <div className='flex-content'>
                <div className='flex-[2]'>
                  <h4 className='mb-3 border-b border-b-slate-400/50'>Package Details</h4>
                  <p>Scroll down the left column to the box titled <span className="font-semibold">Package Dimensions</span>. Here you will enter the size of your package and how much it weighs. Enter the Width, Length, and Height of the box the order is packed in, along with the weight in pounds (lb) or ounces (oz). Click the <span className="font-semibold">"Save"</span> button and the page should update with options from several shipping companies. In most cases, you will use <span className="font-semibold">UPS Ground</span>.</p>
                </div>
                <div className='flex-1'>
                  <figure className={styles.contentImg}>
                    <Image
                      src={img_Labels.packageDimensions}
                      alt="Enter the dimensions and weight of your package."
                      width="622"
                      height="591"
                    />
                  </figure>
                </div>
              </div>
              <div className='flex-content'>
                <div className="flex-none">
                  <figure className={styles.contentImg}>
                    <Image
                      src={img_Labels.shippingExtras}  
                      alt="Be sure to select Signature Confirmation for large deliveries."
                      width="418"
                      height="126"
                    />
                  </figure>
                </div>
                <div className='flex-1'>
                  <p>We always opt for a confirmed delivery, <span className='font-semibold'>especially</span> when it comes to higher volume orders. So be sure to find the section on the top right, labeled <span className="font-semibold">Shipping Extras</span>, and click the <span className="font-semibold">+Add</span> link next to <span className='font-italic'>Signature Confirmation.</span></p>
                </div>
              </div>
            </div>
          </Section>
        </main>
      </Container>
    </>
  )
}

export default Labels