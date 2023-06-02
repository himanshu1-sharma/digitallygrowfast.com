import Button from '@/components/common/Button'
import styles from '@/styles/Header.module.css'
import Image from 'next/image'

export default function Header() {
    return (
        <>
            <section className="container-fluid p-0">
                <div className={`${styles.headerBg} ${styles.onlineStore}`}>
                    <video autoPlay muted loop>
                        <source src="/category/onlineStore/bg.mp4" />
                    </video>
                    <div className={styles.headerOverlay}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12'>
                                    <div className={styles.headerContent}>
                                        <div className={styles.headerTagLine}>
                                            <h5>Wanna! <span> Successful Online Store Business Industry</span></h5>
                                        </div>
                                        <h1>Complete Growth of  <span> Your Online </span> Store </h1>
                                        <p>The Online Store business industry has experienced exponential growth, we developed the Online Store business, exploring its growth, impact, and future prospects.</p>

                                    </div>
                                </div>
                                <div className='col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12'>
                                    {/* <div className={styles.headerImg}>
                                    <img src="/category/onlineStore/header.png" alt="header" className="img-fluid" />
                                </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
