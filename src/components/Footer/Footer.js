import React, { useState } from "react";
import styles from '@/styles/Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import SocialLinks from '../common/SocialLinks'
import CategoryList from "@/api/CategoryApi";
import PlanApi from "@/api/PlanApi";

export default function Footer() {

    const [category] = useState(CategoryList)
    const [planList] = useState(PlanApi)

    return (
        <>
            <section className="container-fluid p-0">
                <footer className={styles.footerBg}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-4 col-lg-12 col-md-4 col-sm-12 col-12'>
                                <div className={styles.footerContent}>
                                    <Link href="/">
                                        <Image src="/logo/logo.png" width={137} height={59} alt="logo" className='img-fluid' />
                                    </Link>
                                    <h4>We’re here to help you{" "} <br />
                                        <span>Business Goals</span></h4>
                                    <p>We’re here to help you achieve your Business Goals</p>
                                </div>
                            </div>
                            <div className='col-xl-8 col-lg-12 col-md-8 col-sm-12 col-12'>
                                <div className='row'>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                        <div className={styles.footerCategory}>
                                            <h4>INDUSTRIES</h4>
                                            <ul>
                                                {category.map((curElt, index) => {
                                                    return (
                                                        <>
                                                            <li key={index + 1}>
                                                                <Link href={curElt.url}>{curElt.name}</Link>
                                                            </li>
                                                        </>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12'>
                                        <div className={styles.footerNav}>
                                            <h4>Plan</h4>
                                            <ul>
                                                <li>
                                                    <Link href="/plan">All Plans</Link>
                                                </li>
                                                {planList && planList.map((curElt) => {
                                                    return (
                                                        <>
                                                            <li>
                                                                <Link href={curElt.url}>{curElt.name} {curElt.span}</Link>
                                                            </li>
                                                        </>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12'>
                                        <div className={styles.footerNav}>
                                            <h4>Company</h4>
                                            <ul>
                                                <li>
                                                    <Link href="/about">About</Link>
                                                </li>
                                                <li>
                                                    <Link href="/contact">Contact</Link>
                                                </li>
                                                <li>
                                                    <Link href="/privacy-policy">Privacy Policy</Link>
                                                </li>
                                                <li>
                                                    <Link href="/terms-and-conditions">Terms & Conditions</Link>
                                                </li>
                                                <li>
                                                    <a href="https://www.digitallygrowfast.com/sitemap-0.xml">Sitemap</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className={styles.footerBottom}>
                                    <ul>
                                        <li>2023. All rights reserved <a href="https://digrowfa.com/">Digrowfa Pvt Ltd</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className={styles.footerBottom}>
                                    <div className={styles.footerBottomLinks}>
                                        <SocialLinks />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        </>
    )
};
