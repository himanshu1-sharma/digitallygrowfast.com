import styles from '@/styles/CompanyHeader.module.css'

export default function Header({ title, description }) {
    return (
        <>
            <section className="container-fluid p-0">
                <div className={styles.headerBg}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className={styles.headerContent}>
                                    <h1>{title}</h1>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
