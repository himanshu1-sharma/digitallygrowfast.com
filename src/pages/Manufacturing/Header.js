import Button from '@/components/common/Button'
import styles from '@/styles/Header.module.css'
import Image from 'next/image'

export default function Header() {
    return (
        <>
            <section className="container-fluid p-0">
                <div className={`${styles.headerBg} ${styles.manufacturing}`}>
                    <video autoPlay muted loop>
                        <source src="/category/Manufacturing/bg.mp4" />
                    </video>
                    <div className={styles.headerOverlay}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12'>
                                    <div className={styles.headerContent}>
                                        <div className={styles.headerTagLine}>
                                            <h5>Wanna! <span> Growth of your Manufacturing Business Online </span></h5>
                                        </div>
                                        <h1>For Online Success, we <span>offer the best</span> Solutions.</h1>
                                        <p>The goal of our manufacturing technology services is to assist companies in leveraging technology to enhance efficiencies and gain visibility into their enterprise functions. Our team of skilled professionals promotes growth by integrating industry best practices with technological expertise, resulting in process improvements.</p>

                                    </div>
                                </div>
                                <div className='col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12'>
                                    {/* <div className={styles.headerImg}>
                                    <img src="/category/Manufacturing/header.png" alt="header" className="img-fluid" />
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
