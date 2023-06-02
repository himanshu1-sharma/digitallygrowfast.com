import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import styles from "@/styles/Contact.module.css";
import Button from "@/components/common/Button";
import axios from "axios";
import { BASEURL } from "@/configs/constants";
import SweetAlert from "react-bootstrap-sweetalert";
import { useRouter } from "next/router";
import CategoryList from "@/api/CategoryApi";
import Link from "next/link";

export default function EnquiryForm() {
    const [input, setInput] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [category] = useState(CategoryList);
    const [region, setRegion] = useState("")
    const [district, setDistrict] = useState("")
    const [categoryName, setCategoryName] = useState("")


    const router = useRouter();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInput({ ...input, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios
                .post(`${BASEURL}api/dgf/enquiry/add-enquiry`, {
                    name: input.name,
                    email: input.email,
                    phone: input.phone,
                    orgainzation: input.orgainzation,
                    region: region,
                    address: input.address,
                    categoryName: categoryName,
                    message: input.message,

                })
                .then((data) => {
                    if (data.data.errorcode === 0) {
                        setShowAlert(true);
                    } else if (data.data.errorcode === 2) {
                        setShowErrorAlert(true);
                    }
                });
            // console.log("name :", input.name)
            // console.log("email :", input.email)
            // console.log("phone :", input.phone)
            // console.log("orgainzation :", input.orgainzation)

            // console.log("state :", region)
            // console.log("district :", district)
            // console.log("categoryName :", categoryName)

            // console.log("message :", input.message)
        } catch (error) {
            console.log(error);
        }
    };

    const handleHideAlert = () => {
        setShowAlert(false);
        setShowErrorAlert(false);
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
                <p>Thank you for choosing our Service! <br />
                    Your message just showed up in our inbox. Talk to you soon</p>
            </SweetAlert>
            <SweetAlert
                danger
                show={showErrorAlert}
                title="Ohh!"
                onConfirm={handleHideAlert}
            >
                <p>Please Fill All Feilds</p>
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
                                    placeholder="Contact Number"
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
                                    type="text"
                                    placeholder="Business Name"
                                    name="orgainzation"
                                    id="orgainzation"
                                    value={input.orgainzation}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <Form.Select
                                aria-label="Default select example "
                                className="mb-3"
                                name="state"
                                id="state"
                                value={region}
                                onChange={(e) => setRegion(e.target.value)}
                            >
                                <option>Region</option>
                                <option value="India">India</option>
                                <option value="Asia Pacific">Asia Pacific</option>
                                <option value="Australia and New Zealand">Australia and New Zealand</option>
                                <option value="Europe">Europe</option>
                                <option value="Latin America">Latin America</option>
                                <option value="Middle East and Africa">Middle East and Africa</option>
                                <option value="North America">North America</option>
                                <option value="United Kingdom">United Kingdom</option>

                            </Form.Select>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <Form.Select
                                aria-label="Default select example "
                                className="mb-3"
                                name="categoryName"
                                id="categoryName"
                                value={categoryName}
                                onChange={(e) => setCategoryName(e.target.value)}
                            >
                                <option>Industry</option>
                                {category.map((curElt, index) => {
                                    return (
                                        <>
                                            <option value={curElt.name} key={index}>{curElt.name}</option>
                                        </>
                                    );
                                })}
                                <option value="Other">Other</option>
                            </Form.Select>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Address"
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
                                    rows={6}
                                    placeholder="How can we help you?"
                                    name="message"
                                    id="message"
                                    value={input.message}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <Form.Group className="mb-3">
                                <div className="checkInput">
                                    {["checkbox"].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check
                                                inline
                                                label="I consent to processing of my personal data entered above for DGF to contact me."
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-1`}
                                                checked
                                            />
                                            <Form.Check
                                                inline
                                                label="I would like to receive details about products, services and events from DGF."
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-2`}
                                                checked
                                            />
                                        </div>
                                    ))}
                                </div>
                            </Form.Group>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className={styles.formConditions}>
                                <p>
                                    For further details on how your personal data will be
                                    processed and how your consent can be managed, refer to the{" "}
                                    <Link href="/privacy-policy">DGF Policies </Link>.{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                    <Button name="Submit" />
                </Form>
            </div>
        </>
    );
}
