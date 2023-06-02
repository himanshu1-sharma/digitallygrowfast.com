import React, { useState } from "react";
import styles from "@/styles/Newsletter.module.css";
import Button from "./Button";
import ButtonOutline from "./ButtonOutline";
import Link from "next/link";
import Modal from 'react-bootstrap/Modal';
import EnquiryForm from "./EnquiryForm";

export default function Newsletter() {

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <section className="container-fluid p-0">
        <div className={styles.newsletterBg}>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className={styles.newsletterContent}>
                  <h4>
                    How do you want us to help transform <br /> your {" "}
                    <span>business?</span>
                  </h4>
                  {/* <h4>
                    What do you aspire to become as a <br /> tech {" "}
                    <span>professional?</span>
                  </h4> */}
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className={styles.newsletterBtn}>
                  <div className={styles.button}>
                    <Link href="/contact">
                      <Button name="Tell us your requirments" />
                    </Link>
                  </div>
                  {/* onClick={() => setModalShow(true)} */}
                  {/* <div className={styles.button1}>
                    <Link href="/contact">
                      <ButtonOutline name="Enquiry Now" />
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="enquiryModal"
    >

      <Modal.Body>
        <EnquiryForm />
      </Modal.Body>

    </Modal>
  );
}