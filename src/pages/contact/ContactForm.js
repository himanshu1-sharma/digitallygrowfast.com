import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import styles from "@/styles/Contact.module.css";
import Button from "@/components/common/Button";
import axios from "axios";
import { BASEURL } from "@/configs/constants";
import SweetAlert from 'react-bootstrap-sweetalert';
import { useRouter } from 'next/router';

export default function ContactForm() {
    const [input, setInput] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    const router = useRouter();

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setInput({ ...input, [name]: value })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.post(`${BASEURL}api/dgf/contact/add-contact`, {
                name: input.name,
                email: input.email,
                phone: input.phone,
                whatsapp: input.whatsapp,
                businessName: input.businessName,
                address: input.address,
                message: input.message
            })
                .then(data => {
                    if (data.data.errorcode === 0) {
                        setShowAlert(true);
                    }
                    else if (data.data.errorcode === 2) {
                        setShowErrorAlert(true)
                    }
                })
            // console.log("name :", input.name)
            // console.log("email :", input.email)
            // console.log("phone :", input.phone)
            // console.log("whatsapp :", input.whatsapp)
            // console.log("businessName :", input.businessName)
            // console.log("address :", input.address)
            // console.log("message :", input.message)

        } catch (error) {
            console.log(error)
        }
    }

    const handleHideAlert = () => {
        setShowAlert(false);
        setShowErrorAlert(false)
        router.reload();
    };

    return (
        <>
            <SweetAlert
                success
                show={showAlert}
                title="Thank You"
                onConfirm={handleHideAlert}
            >
                <p>For Subscribing to Our Newsletter!</p>
                <br />
                <p>You Will Get the Latest Information On Your Subscription Mail</p>
            </SweetAlert>
            <SweetAlert
                danger
                show={showErrorAlert}
                title="Ohh!"
                onConfirm={handleHideAlert}
            >
                <p>You Already Subscribe to Our News Letter </p>
            </SweetAlert>
            <div className={styles.formBox}>
                <Form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Your Name"
                                    name="name"
                                    id="name"
                                    value={input.name}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="Your Email"
                                    name="email"
                                    id="email"
                                    value={input.email}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="number"
                                    placeholder="Phone Number"
                                    name="phone"
                                    id="phone"
                                    value={input.phone}
                                    onChange={handleChange}
                                    minLength={10}
                                />
                            </Form.Group>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="number"
                                    placeholder="Whatsapp Number"
                                    name="whatsapp"
                                    id="whatsapp"
                                    value={input.whatsapp}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Business Name (optional)"
                                    name="businessName"
                                    id="businessName"
                                    value={input.businessName}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Address (optional)"
                                    name="address"
                                    id="address"
                                    value={input.address}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <Form.Group className="mb-3">
                                <Form.Control
                                    as="textarea"
                                    rows={8}
                                    placeholder="Write a short brief about your business"
                                    name="message"
                                    id="message"
                                    value={input.message}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </div>
                    </div>
                    <Button name="Submit" />
                </Form>
            </div>
        </>
    );
}
