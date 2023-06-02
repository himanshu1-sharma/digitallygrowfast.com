import styles from '@/styles/Giveaway.module.css'

export default function Inside() {
    return (
        <>
            <section className="container-fluid p-0">
                <div className={styles.insideBg}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className={styles.title}>
                                    <h2>What will you get In this <span> Giveaway?</span></h2>
                                    <p>Complete Online Business Setup</p>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className={styles.insideList}>
                                    <div className={`${styles.insideListCard} ${styles.one}`}>
                                        <div className={styles.insideImgBox}>
                                            <div className={styles.insideImgBoxOverlay}>
                                                <h4>Logo &
                                                    Graphics</h4>
                                            </div>
                                        </div>
                                        <div className={styles.insideCardContent}>
                                            <p>Gaming accessories include gear such as headsets, extra controllers, charging stations,
                                                memory devices, carrying cases.</p>
                                        </div>
                                    </div>

                                    <div className={`${styles.insideListCard} ${styles.two}`}>
                                        <div className={styles.insideImgBox}>
                                            <div className={styles.insideImgBoxOverlay}>
                                                <h4>Website</h4>
                                            </div>
                                        </div>
                                        <div className={styles.insideCardContent}>
                                            <p>Gaming accessories include gear such as headsets, extra controllers, charging stations,
                                                memory devices, carrying cases.</p>
                                        </div>
                                    </div>

                                    <div className={`${styles.insideListCard} ${styles.three}`}>
                                        <div className={styles.insideImgBox}>
                                            <div className={styles.insideImgBoxOverlay}>
                                                <h4>Online seller
                                                    Platform</h4>
                                            </div>
                                        </div>
                                        <div className={styles.insideCardContent}>
                                            <p>Gaming accessories include gear such as headsets, extra controllers, charging stations,
                                                memory devices, carrying cases.</p>
                                        </div>
                                    </div>

                                    <div className={`${styles.insideListCard} ${styles.four}`}>
                                        <div className={styles.insideImgBox}>
                                            <div className={styles.insideImgBoxOverlay}>
                                                <h4>Social
                                                    Media</h4>
                                            </div>
                                        </div>
                                        <div className={styles.insideCardContent}>
                                            <p>Gaming accessories include gear such as headsets, extra controllers, charging stations,
                                                memory devices, carrying cases.</p>
                                        </div>
                                    </div>

                                    <div className={`${styles.insideListCard} ${styles.five}`}>
                                        <div className={styles.insideImgBox}>
                                            <div className={styles.insideImgBoxOverlay}>
                                                <h4>Digrowfa</h4>
                                            </div>
                                        </div>
                                        <div className={styles.insideCardContent}>
                                            <p>Gaming accessories include gear such as headsets, extra controllers, charging stations,
                                                memory devices, carrying cases.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
