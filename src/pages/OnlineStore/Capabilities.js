import Card from '@/components/common/Card'
import styles from '@/styles/Services.module.css'
import card from '@/styles/Card.module.css'

export default function Capabilities() {
    return (
        <>
            <section className="container-fluid p-0">
                <div className={styles.capabilitiesBg}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className={styles.title}>
                                    <h2 className='text-center'>Our <span>Capabilities</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center mt-5'>
                            <div className='col-xl-5 col-lg-5 col-sm-6 col-sm-12 col-12'>
                                <div className={card.businessGoalsCardBg}>
                                    <div className={card.businessGoalsCard}>
                                        <div className={card.businessGoalsCardTitle}>
                                            <h4>Online<br /> <span>Store</span></h4>
                                        </div>
                                        <p>We combine technical expertise, domain knowledge, and practical know-how to support your application development and integration requirements, with a clear focus on scalability, extensibility, reliability and most importantly driving meaningful business outcomes.</p>
                                        <ul>
                                            <li>Mobile Application Development</li>
                                            <li>Website Development</li>
                                            <li>App & Website Maintenance</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-5 col-lg-5 col-sm-6 col-sm-12 col-12'>
                                <div className={card.businessGoalsCardBg}>
                                    <div className={card.businessGoalsCard}>
                                        <div className={card.businessGoalsCardTitle}>
                                            <h4>Online Store  <br /> <span>Creative Designing</span></h4>
                                        </div>
                                        <p>Our team of Creative designers is expert at helping practices create and design visual pieces for Online Store initiatives. Our team works with you from concept to completion to ensure brand continuity.</p>
                                        <ul>
                                            <li>Logos & Brand Assets</li>
                                            <li>Digital Ad Graphics</li>
                                            <li>Website Design Mock-ups</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-5 col-lg-5 col-sm-6 col-sm-12 col-12'>
                                <div className={card.businessGoalsCardBg}>
                                    <div className={card.businessGoalsCard}>
                                        <div className={card.businessGoalsCardTitle}>
                                            <h4>Multiple  <br /> <span>Management Systems</span></h4>
                                        </div>
                                        <p>Comprehensive Multiple management software in India is a solution with Store management, delivery management, For Online Store</p>
                                        <ul>
                                            <li>For Single Vendor</li>
                                            <li>For Multi-Vendor</li>
                                            <li>For Affiliate Sites</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='col-xl-5 col-lg-5 col-sm-6 col-sm-12 col-12'>
                                <div className={card.businessGoalsCardBg}>
                                    <div className={card.businessGoalsCard}>
                                        <div className={card.businessGoalsCardTitle}>
                                            <h4>Online Store  <br /> <span>Growth Marketing</span></h4>
                                        </div>
                                        <p>Through the latest technology and custom strategies, strengthen the three pillars of marketing success and position your practice for growth in the digital age.</p>
                                        <ul>
                                            <li>Search Engine Optimization</li>
                                            <li>Online Reputation Management</li>
                                            <li>Social Media Marketing </li>
                                        </ul>
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
