import Link from 'next/link'
import styles from '@/styles/PageNotFound.module.css'
import Head from 'next/head'

export default function FourOhFour() {
    return (
        <>
            <Head>
                <title>404 | Page Not Found</title>
                <meta name="description" content="World's 1st Complete Digital Growth Platform" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className={styles.page_404}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-12 col-sm-offset-1  text-center">
                                <div className={styles.errorVideo}>
                                    <video autoPlay muted loop>
                                        <source src="/home/error.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>

                                <div className={styles.contant_box_404}>
                                    <h3>
                                        Look like you are lost
                                    </h3>

                                    <p>the page you are looking for not avaible!</p>

                                    <Link href="/" className={styles.link_404}>Go to Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}