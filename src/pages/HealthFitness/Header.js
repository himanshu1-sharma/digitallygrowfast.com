import Button from '@/components/common/Button'
import styles from '@/styles/Header.module.css'
import Image from 'next/image'

export default function Header() {
    return (
        <>
            <section className="container-fluid p-0">
                <div className={`${styles.headerBg} ${styles.healthFitness}`}>
                    <video autoPlay muted loop>
                        <source src="/category/healthFitness/bg.mp4" />
                    </video>
                    <div className={styles.headerOverlay}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12'>
                                    <div className={styles.headerContent}>
                                        <div className={styles.headerTagLine}>
                                            <h5>Wanna! <span> Boost Your Health & Fitness Business Online </span></h5>
                                        </div>
                                        <h1>Health & Fitness  <span>Online Growth</span> Solutions</h1>
                                        <p>We Have the Best Online Growth Doctors Team for Your Health & Fitness business so don’t be tense as a doctor or Health & Fitness services provider, you focus on your services, and our growth doctor will care of your business growth </p>

                                    </div>
                                </div>
                                <div className='col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12'>
                                    {/* <div className={styles.headerImg}>
                                    <img src="/category/healthFitness/doctor.png" alt="doctor" className="img-fluid" />
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
