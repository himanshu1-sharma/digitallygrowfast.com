import Button from '@/components/common/Button'
import Vanta from '@/components/common/Vanta'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <>
            <section className="container-fluid p-0">
                <Vanta>
                    <div className={styles.homeHeaderBg}>

                        <div className='container'>
                            <div className='row'>
                                <div className='col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12'>
                                    <div className={styles.headerContent}>
                                        <div className={styles.headerTagLine}>
                                            <h5>Wanna! <span> Boost Your Digital Presence ! We Make it Super Easy  </span></h5>
                                        </div>
                                        <h1>Best <span>Online Growth</span> Solutions</h1>
                                        <p>We empower businesses by providing them with an Online Business Platform, which they can leverage to make better, clearer, and more concise business decisions.</p>
                                        <Link href="/industries">
                                        <Button name="Explore" />
                                        </Link>
                                    </div>
                                </div>
                                {/* <div className='col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12'>
                                    <div className={styles.headerImg}>
                                        <Image src="/home/headerImg.png" alt="header" width={1000} height={856} className="img-fluid" />
                                    </div>
                                </div> */}
                            </div>
                        </div>

                    </div>
                </Vanta>
            </section>
        </>
    )
};
