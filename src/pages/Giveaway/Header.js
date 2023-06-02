import styles from '@/styles/Header.module.css'

export default function Header() {
    return (
        <>
            <section className="container-fluid p-0">
                <div className={styles.headerBg}>
                    <video autoPlay muted loop>
                        <source src="/giveaway/bg.mp4" />
                    </video>
                    <div className={styles.headerOverlay}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12'>
                                    <div className={styles.headerContent}>
                                        <div className={styles.headerTagLine}>
                                            <h5>#1 <span>  Time in History Complete online Business Setup</span></h5>
                                        </div>
                                        <h1>Never Ending <span>Giveaway</span></h1>
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
