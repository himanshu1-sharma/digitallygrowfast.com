import styles from '@/styles/Giveaway.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function TakeParticipation() {
    return (
        <>
            <section className="container-fluid p-0">
                <div className={styles.insideBg}>
                    <div className="container">
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className={styles.title}>
                                    <h2>How to take <span> participation?</span></h2>
                                    <p>Need to follow simple 3 Steps</p>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                                <div className={styles.setpCardBg}>
                                    <div className={styles.setpCard}>
                                        <span>Step 1</span>
                                        <h4>Follow</h4>
                                        <p>Subscribe & follow our
                                            Social media,
                                            Youtube, Instagram</p>
                                        <ul>
                                            <li>
                                                <a href="https://www.youtube.com/@digitallygrowfast" target="_blank">
                                                    <FontAwesomeIcon icon={faYoutube} />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.facebook.com/digitallygrowfast/" target="_blank">
                                                    <FontAwesomeIcon icon={faFacebookF} />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/digitally_grow_fast/" target="_blank">
                                                    <FontAwesomeIcon icon={faInstagram} />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                                <div className={styles.setpCardBg}>
                                    <div className={styles.setpCard}>
                                        <span>Step 2</span>
                                        <h4>Fill</h4>
                                        <p>Fill the
                                            Form Below</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                                <div className={styles.setpCardBg}>
                                    <div className={styles.setpCard}>
                                        <span>Step 3</span>
                                        <h4>Attend</h4>
                                        <p>Result will announce
                                            on our youtube
                                            Livestream</p>
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
