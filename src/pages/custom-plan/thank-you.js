import React, { useState } from "react";
import Head from 'next/head'
import Newsletter from "@/components/common/Newsletter";
import Footer from "@/components/Footer/Footer";
import MobileNavigatin from "@/components/Navigation/MobileNavigation";
import Navigation from "@/components/Navigation/Navigation";
import styles from "@/styles/Thankyou.module.css";
import ConfettiExplosion from 'react-confetti-explosion';
import Link from "next/link";
import Button from "@/components/common/Button";


export default function ThankYou() {

    const [isExploding, setIsExploding] = useState(true);

    return (
        <>
            <Head>
                <title>Congratulations | DGF</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MobileNavigatin />
            <Navigation />
            {isExploding &&
                <div className="confetti-explosion-container">
                    <ConfettiExplosion
                        particleCount={250}
                        colors={['#0098ff', '#7b35c8']}
                        fadeOut={true}
                        recycle={false}
                        force={1.1}
                        duration={3000}
                        width={2000}
                        className="confetti1"

                    />
                </div>
            }
            <section className="container-fluid p-0">
                <div className={styles.thankyouBg}>
                    <div className={styles.thankyouContent}>
                        <h1>Thank You</h1>
                        <p>Thank you for choosing our Service! <br />
                            Your message just showed up in our inbox. Talk to you soon</p>
                        <Link href="/industries">
                            <Button name="Get Other Service" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* <Newsletter />
            <Footer /> */}
        </>
    )
};
