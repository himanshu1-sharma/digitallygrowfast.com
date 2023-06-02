import styles from '@/styles/Services.module.css'
import Image from 'next/image'

export default function Why() {
    return (
        <>
            <section className="container-fluid p-0">
                <div className={styles.helpingHealthareBg}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className={styles.whyTitle}>
                                    <div className={styles.title}>
                                        <h2>What Makes Digitally Grow Fast, Best Solutions <span>for Your Business</span></h2>
                                    </div>
                                </div>

                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className={`${styles.helpingHealthareContent} ${styles.helpingHealthareContentImg}`}>
                                    <Image src="/category/healthFitness/why.png" alt="why" width={650} height={650} className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
