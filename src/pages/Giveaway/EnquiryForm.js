import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import styles from "@/styles/Contact.module.css";
import giveaway from '@/styles/Giveaway.module.css'
import Button from "@/components/common/Button";
import axios from "axios";
import { BASEURL } from "@/configs/constants";
import SweetAlert from "react-bootstrap-sweetalert";
import { useRouter } from "next/router";
import CategoryList from "@/api/CategoryApi";
import Link from "next/link";
import Accordion from 'react-bootstrap/Accordion';
import Spinner from 'react-bootstrap/Spinner';

export default function EnquiryForm() {
    const [input, setInput] = useState({})
    const [location, setLocation] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [countryList, setCountryList] = useState()
    const [youtube, setYoutube] = useState();
    const [instagram, setInstagram] = useState();
    const [facebook, setFacebook] = useState();

    console.log("youtube", youtube)

    const fetchCountryList = async () => {
        await axios.get("https://restcountries.com/v3.1/all")
            .then(data => {
                setCountryList(data.data)
            })
    }

    useEffect(() => {
        fetchCountryList()
        navigator.geolocation.getCurrentPosition(pos => {
            const { latitude, longitude } = pos.coords;
            console.log(latitude, longitude)
            const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
            fetch(url).then(res => res.json()).then(data => setLocation(data.address))
        })
    }, [])



    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setInput({ ...input, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        // try {
        //     await axios.post(`${BASEURL}api/dgf/custom/add-enquiry`, {
        //         name: input.name,
        //         email: input.email,
        //         phone: input.phone,
        //         businessName: input.orgainzation,
        //         country: location.country,
        //         industry: categoryName,
        //         state: location.state,
        //         city_district: location.city_district,
        //         postcode: location.postcode,
        //         address: input.address,
        //         message: input.message,
        //     }).then((data) => {
        //         if (data.data.errorcode === 0) {
        //             setIsLoading(true)
        //             router.push('/custom-plan/thank-you');
        //         } else if (data.data.errorcode === 2) {
        //             toast.warn(`${data.data.errorcode}`, {
        //                 position: "bottom-center",
        //                 autoClose: 5000,
        //                 hideProgressBar: false,
        //                 closeOnClick: true,
        //                 pauseOnHover: true,
        //                 draggable: true,
        //                 progress: undefined,
        //                 theme: "dark",
        //             });
        //         }
        //     });
        // } catch (error) {
        //     toast.warn('Please fill all Feilds', {
        //         position: "bottom-center",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "dark",
        //     });
        //     console.log(error)
        // }

        console.log("name", input.name)
        console.log("email", input.email)
        console.log("phone", input.phone)
        console.log("country", location.country)
        console.log("youtube", youtube)
        console.log("youtubeLink", input.youtubeLink)
        console.log("youtubeScreenshot", input.youtubeScreenshot)
        console.log("instagram", instagram)
        console.log("instagramLink", input.instagramLink)
        console.log("instagramScreenshot", input.instagramScreenshot)
        console.log("facebook", facebook)
        console.log("facebookLink", input.facebookLink)
        console.log("facebookScreenshot", input.facebookScreenshot)
    }




    return (
        <>
            <div className="container-fluid p-0">
                <div className={giveaway.insideBg}>
                    <div className="container">
                        <div className='row mb-5 d-flex justify-content-center'>
                            <div className='col-lg-6'>
                                <div className={giveaway.title}>
                                    <h2>Fill the Giveaway Form to get the <span>Chance of Winning</span></h2>
                                    <p>Gaming accessories include gear such as headsets, extra controllers, charging stations, memory devices, carrying cases and much more.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
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
                                                        required
                                                    />
                                                </Form.Group>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <Form.Group className="mb-3">
                                                    <Form.Control
                                                        type="number"
                                                        placeholder="Contact/WhatsApp Number"
                                                        name="phone"
                                                        id="phone"
                                                        minLength={10}
                                                        value={input.phone}
                                                        onChange={handleChange}
                                                        required
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
                                                        required
                                                    />
                                                </Form.Group>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">

                                                <Form.Select aria-label="Default select example">
                                                    {countryList && countryList?.map((curElt, index) => {
                                                        return (
                                                            <>
                                                                <option key={index} selected={curElt.name.common === "India"} value={curElt.name.common}>{curElt.name.common}</option>
                                                            </>
                                                        )
                                                    })}

                                                </Form.Select>
                                            </div>



                                            <div className="col-lg-12">
                                                <div className="giveawayForm">
                                                    <Accordion>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>YouTube</Accordion.Header>
                                                            <Accordion.Body>

                                                                <div className={giveaway.giveawayCheckInput}>
                                                                    <h4>Have you subscribed to our youtube channel? </h4>
                                                                    {['radio'].map((type) => (
                                                                        <div key={`inline-${type}`} className="mb-3">
                                                                            <Form.Check
                                                                                inline
                                                                                label="NO"
                                                                                name="group1"
                                                                                type={type}
                                                                                id={`inline-${type}-1`}
                                                                                value="no"
                                                                                onChange={(e) => setYoutube(e.target.value)}
                                                                                className={styles.giveawayInput}
                                                                            />
                                                                            <Form.Check
                                                                                inline
                                                                                label="Yes"
                                                                                name="group1"
                                                                                type={type}
                                                                                id={`inline-${type}-2`}
                                                                                value="yes"
                                                                                onChange={(e) => setYoutube(e.target.value)}
                                                                                className={styles.giveawayInput}
                                                                            />
                                                                        </div>
                                                                    ))}
                                                                    {youtube === 'no' &&

                                                                        <>
                                                                            <div className={giveaway.conditionContent}>
                                                                                <h6>Then click on the link and subscribe first</h6>
                                                                                <p>Channel link :- <a href="https://www.youtube.com/@digitallygrowfast" target="_blank">https://www.youtube.com/@digitallygrowfast</a></p>
                                                                                <br />
                                                                                <small>Note:- follow content should be goes here</small>
                                                                            </div>
                                                                        </>

                                                                    }
                                                                    {youtube === "yes" &&

                                                                        <>
                                                                            <div className={giveaway.conditionContent}>
                                                                                <h6>Then tell us yor YouTube handle name or profile link and upload a comment screenshot</h6>
                                                                                <div className="row">
                                                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                                                        <Form.Group className="mt-3">
                                                                                            <Form.Control
                                                                                                type="text"
                                                                                                placeholder="YouTube Account Link"
                                                                                                name="youtubeLink"
                                                                                                id="youtubeLink"
                                                                                                minLength={10}
                                                                                                value={input.youtubeLink}
                                                                                                onChange={handleChange}
                                                                                                required
                                                                                            />
                                                                                        </Form.Group>
                                                                                    </div>
                                                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                                                        <Form.Group className="mt-3">
                                                                                            <Form.Control
                                                                                                type="file"
                                                                                                placeholder="Handle Name/Profile Link"
                                                                                                name="youtubeScreenshot"
                                                                                                id="youtubeScreenshot"
                                                                                                minLength={10}
                                                                                                value={input.youtubeScreenshot}
                                                                                                onChange={handleChange}
                                                                                                required
                                                                                            />
                                                                                        </Form.Group>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </>

                                                                    }
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="1">
                                                            <Accordion.Header>Instagram</Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className={giveaway.giveawayCheckInput}>
                                                                    <h4>Have you followed us on Instgram? </h4>
                                                                    {['radio'].map((type) => (
                                                                        <div key={`instagram-${type}`} className="mb-3">
                                                                            <Form.Check
                                                                                inline
                                                                                label="NO"
                                                                                name="instagram"
                                                                                type={type}
                                                                                id={`instagram-${type}-1`}
                                                                                value="no"
                                                                                onChange={(e) => setInstagram(e.target.value)}
                                                                                className={styles.giveawayInput}
                                                                            />
                                                                            <Form.Check
                                                                                inline
                                                                                label="Yes"
                                                                                name="instagram"
                                                                                type={type}
                                                                                id={`instagram-${type}-2`}
                                                                                value="yes"
                                                                                onChange={(e) => setInstagram(e.target.value)}
                                                                                className={styles.giveawayInput}
                                                                            />
                                                                        </div>
                                                                    ))}
                                                                    {instagram === 'no' &&

                                                                        <>
                                                                            <div className={giveaway.conditionContent}>
                                                                                <h6>Then click on the link and follow first</h6>
                                                                                <p>Instagram Id :- <a href="https://www.instagram.com/digitally_grow_fast/" target="_blank">https://www.instagram.com/digitally_grow_fast/</a></p>
                                                                                <br />
                                                                                <small>Note:- follow content should be goes here</small>
                                                                            </div>
                                                                        </>

                                                                    }
                                                                    {instagram === "yes" &&

                                                                        <>
                                                                            <div className={giveaway.conditionContent}>
                                                                                <h6>Then tell us yor YouTube handle name or profile link and upload a comment screenshot</h6>
                                                                                <div className="row">
                                                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                                                        <Form.Group className="mt-3">
                                                                                            <Form.Control
                                                                                                type="text"
                                                                                                placeholder="Instagram Profile Link"
                                                                                                name="instagramLink"
                                                                                                id="instagramLink"
                                                                                                value={input.instagramLink}
                                                                                                onChange={handleChange}
                                                                                                required
                                                                                            />
                                                                                        </Form.Group>
                                                                                    </div>
                                                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                                                        <Form.Group className="mt-3">
                                                                                            <Form.Control
                                                                                                type="file"
                                                                                                name="instagramScreenshot"
                                                                                                id="instagramScreenshot"
                                                                                                value={input.instagramScreenshot}
                                                                                                onChange={handleChange}
                                                                                                required
                                                                                            />
                                                                                        </Form.Group>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </>

                                                                    }
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="2">
                                                            <Accordion.Header>Facebook</Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className={giveaway.giveawayCheckInput}>
                                                                    <h4>Have you followed us on Facebook? </h4>
                                                                    {['radio'].map((type) => (
                                                                        <div key={`facebook-${type}`} className="mb-3">
                                                                            <Form.Check
                                                                                inline
                                                                                label="NO"
                                                                                name="facebook"
                                                                                type={type}
                                                                                id={`facebook-${type}-1`}
                                                                                value="no"
                                                                                onChange={(e) => setFacebook(e.target.value)}
                                                                                className={styles.giveawayInput}
                                                                            />
                                                                            <Form.Check
                                                                                inline
                                                                                label="Yes"
                                                                                name="facebook"
                                                                                type={type}
                                                                                id={`facebook-${type}-2`}
                                                                                value="yes"
                                                                                onChange={(e) => setFacebook(e.target.value)}
                                                                                className={styles.giveawayInput}
                                                                            />
                                                                        </div>
                                                                    ))}
                                                                    {facebook === 'no' &&

                                                                        <>
                                                                            <div className={giveaway.conditionContent}>
                                                                                <h6>Then click on the link and follow first</h6>
                                                                                <p>Channel link :- <a href="https://www.facebook.com/digitallygrowfast/" target="_blank">https://www.facebook.com/digitallygrowfast/</a></p>
                                                                                <br />
                                                                                <small>Note:- follow content should be goes here</small>
                                                                            </div>
                                                                        </>

                                                                    }
                                                                    {facebook === "yes" &&

                                                                        <>
                                                                            <div className={giveaway.conditionContent}>
                                                                                <h6>Then tell us yor YouTube handle name or profile link and upload a comment screenshot</h6>
                                                                                <div className="row">
                                                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                                                        <Form.Group className="mt-3">
                                                                                            <Form.Control
                                                                                                type="text"
                                                                                                placeholder="Facebook Profile Link"
                                                                                                name="facebookLink"
                                                                                                id="facebookLink"
                                                                                                value={input.facebookLink}
                                                                                                onChange={handleChange}
                                                                                                required
                                                                                            />
                                                                                        </Form.Group>
                                                                                    </div>
                                                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                                                        <Form.Group className="mt-3">
                                                                                            <Form.Control
                                                                                                type="file"
                                                                                                name="facebookScreenshot"
                                                                                                id="facebookScreenshot"
                                                                                                value={input.facebookScreenshot}
                                                                                                onChange={handleChange}
                                                                                                required
                                                                                            />
                                                                                        </Form.Group>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </>

                                                                    }
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </div>
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
                                                        <Link href="">DGF Policies </Link>.{" "}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {isLoading ?
                                            <>
                                                <div className={styles.loadingButton}>
                                                    <button>
                                                        <Spinner
                                                            as="span"
                                                            animation="border"
                                                            size="sm"
                                                            role="status"
                                                            aria-hidden="true"
                                                        />
                                                        <span>Loading...</span>
                                                    </button>
                                                </div>
                                            </>
                                            :

                                            <Button name="Submit" />
                                        }

                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
