import styles from '@/styles/SocialLinks.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube, faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons"


export default function SocialLinks() {
    return (
        <>
            <div className={styles.socialLinks}>
                <ol>
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
                    <li>
                        <a href="https://www.linkedin.com/company/digitallygrowfast/" target="_blank">
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
        </>
    )
};
