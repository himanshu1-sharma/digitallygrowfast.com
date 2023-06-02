import Button from '@/components/common/Button'
import styles from '@/styles/Header.module.css'
import Image from 'next/image'

export default function Header() {
    return (
        <>
            <section className="container-fluid p-0">
                <div className={`${styles.headerBg} ${styles.finTech}`}>
                    <video autoPlay muted loop>
                        <source src="/category/finTech/bg.mp4" />
                    </video>
                    <div className={styles.headerOverlay}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12'>
                                    <div className={styles.headerContent}>
                                        <div className={styles.headerTagLine}>
                                            <h5>Wanna! <span> Growth of your Finance Business Online</span></h5>
                                        </div>
                                        <h1>Finance Business <span>Online Growth</span> Solutions</h1>
                                        <p>Consider investing in developing a finance Online Growth to establish a closer relationship with your customers and maintain a competitive edge over rivals. A sophisticated finance app and website not only enables users to monitor their spending but also cultivates their financial literacy.</p>

                                    </div>
                                </div>
                                <div className='col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12'>
                                    {/* <div className={styles.headerImg}>
                                        <img src="/category/finTech/header.png" alt="header" className="img-fluid" />
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
