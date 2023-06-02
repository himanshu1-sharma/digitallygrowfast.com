import styles from "@/styles/OnlineGrowthRevolution.module.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Navigation(params) {
    return (
        <>
            {/* =====navigation======== */}
            <section className="container-fluid p-0">
                <div className={styles.navigationBg}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className={styles.navigationLogo}>
                                    <Link href="/">
                                        <Image
                                            src="/logo/logo.png"
                                            width={138}
                                            height={60}
                                            alt="DGF logo"
                                            className="img-fluid"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className={styles.socialLinks}>
                                    <ol>
                                        <li>
                                            <a
                                                href="https://www.youtube.com/@digitallygrowfast"
                                                target="_blank"
                                            >
                                                <FontAwesomeIcon icon={faYoutube} />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.facebook.com/digitallygrowfast/"
                                                target="_blank"
                                            >
                                                <FontAwesomeIcon icon={faFacebookF} />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.instagram.com/digitally_grow_fast/"
                                                target="_blank"
                                            >
                                                <FontAwesomeIcon icon={faInstagram} />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.linkedin.com/company/digitallygrowfast/"
                                                target="_blank"
                                            >
                                                <FontAwesomeIcon icon={faLinkedinIn} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://wa.me/+919910067051/" target="_blank">
                                                <FontAwesomeIcon icon={faWhatsapp} />
                                            </a>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========end======== */}
        </>
    )
};
