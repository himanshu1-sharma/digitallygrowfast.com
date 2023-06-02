import Button from '@/components/common/Button'
import styles from '@/styles/Header.module.css'
import Image from 'next/image'

export default function Header() {
    return (
        <>
            <section className="container-fluid p-0">
                <div className={`${styles.headerBg} ${styles.restaurant}`}>
                    <video autoPlay muted loop>
                        <source src="/category/restaurant/bg.mp4" />
                    </video>
                    <div className={styles.headerOverlay}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12'>
                                    <div className={styles.headerContent}>
                                        <div className={styles.headerTagLine}>
                                            <h5>Wanna! <span> Growth of your Restaurant Business Online </span></h5>
                                        </div>
                                        <h1>we offer the best <span>Online Restaurant Growth</span> Solutions.</h1>
                                        <p>Drive your potential customers into a comfort zone where ordering online food becomes a cakewalk with complete digital synced solutions in food delivery.</p>

                                    </div>
                                </div>
                                <div className='col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12'>
                                    {/* <div className={styles.headerImg}>
                                    <img src="/category/restaurant/header.png" alt="Restaurant" className="img-fluid" />
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
