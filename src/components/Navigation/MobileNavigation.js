import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/MobileNavigation.module.css";
import SocialLinks from '../common/SocialLinks'

export default function MobileNavigatin() {
    const [active, setActive] = useState(false);

    return (
        <>
            <div className="desktopHide">
                <section className="container-fluid">
                    <header
                        className={
                            active
                                ? `${styles.headerArea} ${styles.open_dropdown}`
                                : styles.headerArea
                        }
                    >
                        <div className="container">
                            <div className="navbar">
                                <Link href="/">
                                    <Image
                                        src="/logo/logo.png"
                                        alt="logo"
                                        width={85}
                                        height={37}
                                        className="img-fluid"
                                    />
                                </Link>
                                <button
                                    className={
                                        active
                                            ? `${styles.hum_btn} ${styles.hub_toggle} ${styles.open}`
                                            : `${styles.hum_btn} ${styles.hub_toggle}`
                                    }
                                    onClick={() => setActive(!active)}
                                >
                                    <span className={styles.svg_wrap}>
                                        <svg
                                            className={`${styles.ham} ${styles.hamRotate} ${styles.ham4}`}
                                            viewBox="0 0 100
                                    100"
                                            width="80"
                                        >
                                            <path
                                                className={`${styles.line} ${styles.top}`}
                                                d="m 70,33 h -40 c
                                        0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796
                                        8.5,8.5 8.5,8.5 h 20 v -20"
                                            />
                                            <path
                                                className={`${styles.line} ${styles.middle}`}
                                                d="m 70,50 h
                                            -40"
                                            />
                                            <path
                                                className={`${styles.line} ${styles.bottom}`}
                                                d="m 30,67
                                                h 40 c 0,0 8.5,0.149796 8.5,-8.5
                                                0,-8.649796 -8.5,-8.5 -8.5,-8.5
                                                h -20 v 20"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <nav
                            className={
                                active ? `${styles.main_nav} ${styles.active}` : styles.main_nav
                            }
                        >
                            <div className={styles.nav_container}>
                                <ul className={styles.navbar_nav}>
                                    <li className={styles.link_item}>
                                        <Link href="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li className={styles.link_item}>
                                        <Link href="/about">
                                            ABOUT
                                        </Link>
                                    </li>
                                    <li className={styles.link_item}>
                                        <Link href="/contact">
                                            Contact
                                        </Link>
                                    </li>
                                    <li className={styles.link_item}>
                                        <Link href="/industries">
                                            Industries
                                        </Link>
                                    </li>
                                    <li className={styles.link_item}>
                                        <Link href="/plan">
                                            Plan
                                        </Link>
                                    </li>
                                    <li className={styles.text}>
                                        <span>Email</span><br />
                                        <a href="mailto:mail.digrowfa@gmail.com">mail.digrowfa@gmail.com</a>
                                    </li>
                                    <li className={styles.text}>
                                        <span> Phone</span><br />
                                        <a href="tel:9555271705">9555271705</a>
                                    </li>
                                    <li className={styles.text}>
                                        <span> Office</span><br />
                                        <a>S-193, FIRST FLOOR SCHOOL BLOCK, SHAKARPUR, Laxmi Nagar, Delhi 110092    </a>
                                    </li>
                                    <li className={styles.text}>
                                        <span> Follow us:</span><br />
                                        <SocialLinks />
                                    </li>
                                </ul>


                            </div>
                        </nav>
                    </header>
                </section>
            </div>

        </>
    );
}
