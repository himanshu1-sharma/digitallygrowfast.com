import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Services.module.css'
import Navigation from '@/components/Navigation/Navigation'
import Newsletter from '@/components/common/Newsletter'
import Footer from '@/components/Footer/Footer'
import Header from './Restaurant/Header'
import HelpingHealthcare from './Restaurant/HelpingHealthcare'
import Goals from './Restaurant/Goals'
import Why from '@/components/common/Why'
import Capabilities from './Restaurant/Capabilities'
import MobileNavigatin from '@/components/Navigation/MobileNavigation'
import Plan from '@/components/common/Plan'

export default function Restaurant() {
    return (
        <>
            <Head>
                <title>Restaurant</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MobileNavigatin />
            <Navigation />
            <Header />
            <HelpingHealthcare />
            <Goals />
            <Why />
            <Capabilities />
            <Plan />
            {/* <Newsletter /> */}
            <Footer />
        </>
    )
};