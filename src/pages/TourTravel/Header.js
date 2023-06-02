import Button from '@/components/common/Button'
import styles from '@/styles/Header.module.css'
import Image from 'next/image'

export default function Header() {
    return (
        <>
            <section className="container-fluid p-0">
                <div className={`${styles.headerBg} ${styles.tourTravel}`}>
                    <video autoPlay muted loop>
                        <source src="/category/tourTravel/bg.mp4" />
                    </video>
                    <div className={styles.headerOverlay}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12'>
                                    <div className={styles.headerContent}>
                                        <div className={styles.headerTagLine}>
                                            <h5>Wanna! <span> Growth of your tour and travel Business Online </span></h5>
                                        </div>
                                        <h1>Tour & Travel  <span>Online Growth</span> Solutions</h1>
                                        <p>increase the profitability of your travel company, Digitally Grow Fast the fastest-growing company in India will help you with travel and tourism growth solutions that will effectively engage your customers. It can improve your business outreach by targeting all the verticals optimally.</p>

                                    </div>
                                </div>
                                <div className='col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12'>
                                    {/* <div className={styles.headerImg}>
                                        <img src="/category/tourTravel/header.png" alt="header" className="img-fluid" />
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
