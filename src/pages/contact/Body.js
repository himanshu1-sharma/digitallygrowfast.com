import EnquiryForm from '@/components/common/EnquiryForm'
import styles from '@/styles/Contact.module.css'
import ContactForm from './ContactForm'


export default function Body() {
    return (
        <>
            <section className="container-fluid p-0">
                <div className={styles.bodyBg}>
                    <div className='container'>
                        <div className="row d-flex justify-content-center">
                            <div className='col-lg-6'>
                                <div className={styles.title}>
                                    <h2>How Can We <span>Help You?</span></h2>
                                    <p>Our team is here to help. Whether your inquiry is about services or support, simply fill out the contact form below.

                                        We look forward to hearing from you!</p>
                                </div>
                            </div>
                        </div>
                        <EnquiryForm />
                        <div className="row mt-5">
                            <div className='col-lg-12'>
                                <div className={styles.title}>
                                    <h2>Feel free to <span>contact us</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className='row mb-5'>
                            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                                <div className={styles.contactContent}>
                                    <label>MAIL</label>
                                    <h4>
                                        <a href="mailto:digitallygrowfast@gmail.com">digitallygrowfast@gmail.com</a>
                                    </h4>
                                </div>
                                <div className={styles.contactContent}>
                                    <label>PHONE</label>
                                    <h4>
                                        <a href="tel:+91 9910067051">+91 9910067051</a>
                                    </h4>
                                </div>
                                <div className={styles.contactContent}>
                                    <label>OFFICE</label>
                                    <h4>
                                        S-193, FIRST FLOOR SCHOOL BLOCK, SHAKARPUR, Laxmi Nagar, Delhi 110092
                                    </h4>
                                </div>
                            </div>
                            <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12'>
                                <div className={styles.contactMap}>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.116867276999!2d77.27749427621691!3d28.626259284364405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce398220f47e1%3A0x19aa815e5fb1cbed!2sDigrowfa%3A%20Digitally%20Grow%20Fast!5e0!3m2!1sen!2sin!4v1685439526721!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                                </div>
                            </div>
                        </div>
                        {/* <ContactForm /> */}

                    </div>
                </div>
            </section>
        </>
    )
};
