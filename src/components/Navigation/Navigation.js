import React, { useState, useEffect } from "react";
import styles from '@/styles/Navigation.module.css'
import Link from 'next/link'
import Image from 'next/image'
import SocialLinks from '../common/SocialLinks'
import CategoryList from "@/api/CategoryApi";


export default function Navigation() {

    const [category] = useState(CategoryList)
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition > 80) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="mobileHide">
                <section className="container-fluid">
                    <nav className={active ? `${styles.navigation} ${styles.active}` : styles.navigation}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                                    <div className={styles.navigationMenu}>
                                        <ul>
                                            <li className={styles.dropdown}>Industries <Image src="/icons/arrow.png" alt="arrow" width={14} height={8} className="img-fluid" />
                                                <ol className={styles.dropdown_menu}>
                                                    {category.map((curElt, index) => {
                                                        return (
                                                            <>
                                                                <Link href={curElt.url} key={index + 1}>
                                                                    <li>{curElt.name}</li>
                                                                </Link>
                                                            </>
                                                        )
                                                    })}

                                                </ol>
                                            </li>



                                        </ul>
                                    </div>
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                                    <div className={styles.logo}>
                                        <Link href="/">
                                            <Image src="/logo/logo.png" width={187} height={80} alt="DGF logo" className="img-fluid" />
                                        </Link>
                                    </div>
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                                    <div className={styles.navigationLinks}>
                                        <SocialLinks />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </section>
            </div>

        </>
    )
};
