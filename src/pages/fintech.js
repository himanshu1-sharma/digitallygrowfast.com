import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Services.module.css'
import Navigation from '@/components/Navigation/Navigation'
import Newsletter from '@/components/common/Newsletter'
import Footer from '@/components/Footer/Footer'
import Header from './Fintech/Header'
import HelpingHealthcare from './Fintech/HelpingHealthcare'
import Goals from './Fintech/Goals'
import Why from '@/components/common/Why'
import Capabilities from './Fintech/Capabilities'
import MobileNavigatin from '@/components/Navigation/MobileNavigation'
import Plan from '@/components/common/Plan'

export default function Fintech() {
    return (
        <>
            <Head>
                <title>FinTech</title>
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
