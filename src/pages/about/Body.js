import styles from '@/styles/About.module.css'
import Image from 'next/image'
import Card from '@/components/common/Card'
import home from '@/styles/Home.module.css'

export default function Body() {
    return (
        <>
            <section className="container-fluid p-0">
                <div className={styles.bodyBg}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                                <div className={styles.aboutCompany}>
                                    <Image src="/company/aboutCompany.png" alt="about company" width={597} height={398} className="img-fluid" />
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                                <div className={styles.aboutCompany}>
                                    <h2>Who we  <span>are</span></h2>
                                    <p>The World’s 1st complete online growth solution providing platform, an initiative by Digrowfa Pvt. Ltd.
                                        Here you get the combo Package in which you get the best IT SERVICES as well as TRAINING for YOUR ONLINE BUSINESS at a very affordable price. At “DIGITALLY GROW FAST” We not only provide you simple services but first we also work on research/analysis/market trends/competitors, then we prepare the best package for your online business growth.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="container-fluid p-0">
                <div className={home.businessGoalsBg}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12'>
                                <div className={home.businessGoalsTitle}>
                                    <h2>We Provide the Best Solutions
                                        To Achieve Your  <span>Business Goals </span></h2>
                                </div>
                            </div>
                            <div className='col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12'>
                                <div className={home.businessGoalsCardBox}>
                                    <div className='row d-flex justify-content-center'>
                                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                            <Card
                                                title="Our  "
                                                span="Vision"
                                                description=" is to create a prosperous future for businesses operating in the digital landscape. We are committed to establishing sustainable, long-term business partnerships that foster growth and success for our clients."
                                            />
                                        </div>
                                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                            <Card
                                                title="Our "
                                                span="Mission"
                                                description="is to deliver modern and innovative web and mobile software solutions to businesses of all sizes, from startups to enterprises. We strive to provide affordable options without compromising on quality while prioritizing customer satisfaction throughout the entire process."
                                            />
                                        </div>
                                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                            <Card
                                                title="Since  "
                                                span="2021"
                                                description="Our goal is to earn the trust of our clients and continue building on our successes. We are committed to creating a positive outlook for businesses operating in the digital landscape by fostering productive, long-lasting partnerships."
                                            />
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
