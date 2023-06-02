import Button from '@/components/common/Button'
import styles from '@/styles/Header.module.css'
import Image from 'next/image'

export default function Header() {
    return (
        <>
            <section className="container-fluid p-0">
                <div className={`${styles.headerBg} ${styles.edTech}`}>
                    <video autoPlay muted loop>
                        <source src="/category/edTech/bg.mp4" />
                    </video>
                    <div className={styles.headerOverlay}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12'>
                                    <div className={styles.headerContent}>
                                        <div className={styles.headerTagLine}>
                                            <h5>Wanna! <span>  Boost Education Services Online </span></h5>
                                        </div>
                                        <h1>eLearning    <span> Growth Solutions</span>  </h1>
                                        <p>highly recognized e-learning Growth Solutions Provider with years of experience in providing e-learning industry Growth. Get all the possible benefits with the help of advanced features. </p>

                                    </div>
                                </div>
                                <div className='col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12'>
                                    {/* <div className={styles.headerImg}>
                                    <img src="/category/edTech/header.png" alt="header" className="img-fluid" />
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
