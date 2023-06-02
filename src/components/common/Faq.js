import React, { useState } from "react";
import styles from "@/styles/Faq.module.css";
import Accordion from 'react-bootstrap/Accordion';
import faq from '@/api/Faq.js'

export default function Faq() {

    const [faqData] = useState(faq)

    return (
        <>
            <section className="container-fluid p-0">
                <div className={styles.faqBg}>
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-10">
                                <div className={styles.faqTitle}>
                                    <h2>Frequently Asked <br /> <span>Questions</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-10">
                                <div className={styles.faqAccordionBg}>
                                    <div className={styles.faqAccordion}>
                                        <div className="faqAccordion">
                                            <Accordion>
                                                {faqData.map((curElt, index) => {
                                                    return (
                                                        <>
                                                            <Accordion.Item eventKey={index}>
                                                                <Accordion.Header>
                                                                    <div className="plus">
                                                                        <div className="top"></div>
                                                                        <div className="bottom"></div>
                                                                    </div>
                                                                    {curElt.question}
                                                                </Accordion.Header>
                                                                <Accordion.Body>{curElt.answer}</Accordion.Body>
                                                            </Accordion.Item>
                                                        </>
                                                    )
                                                })}

                                            </Accordion>
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
