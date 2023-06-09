import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Navigation from '@/components/Navigation/Navigation'
import Header from './Home/Header'
import BusinessGoals from './Home/BusinessGoals'
import Testimonial from './Home/Testimonial'
import Categories from './Home/Categories'
import Plan from '../components/common/Plan'
import Faq from '../components/common/Faq'
import Newsletter from '@/components/common/Newsletter'
import Footer from '@/components/Footer/Footer'
import MobileNavigatin from '@/components/Navigation/MobileNavigation'

export default function Home() {
  return (
    <>
      <Head>
        <title>Digitally Grow Fast</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MobileNavigatin />
      <Navigation />
      <Header />
      <BusinessGoals />
      <Categories />
      <Testimonial />
      <Plan />


      <Faq />
      <Newsletter />
      <Footer />
    </>
  )
}
