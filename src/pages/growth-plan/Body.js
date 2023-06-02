import React, { useState, useEffect } from "react";
import GrowthPlanCategoryList from "@/api/GrowthPlan";
import styles from "@/styles/CustomPlan.module.css";
import form from "@/styles/Contact.module.css";
import Image from "next/image";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from "@/components/common/Button";
import CategoryList from "@/api/CategoryApi";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { BASEURL } from "@/configs/constants";
import Spinner from 'react-bootstrap/Spinner';
import { useRouter } from "next/router";
import CountryListApi from "@/api/CountryApi";

export default function Body() {

    const [buttonValue, setButtonValue] = useState("")
    const [isbuttonclick, setIsButtonClick] = useState(false)
    const [cardDetailShow, setCardDetailShow] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const router = useRouter();

    const page = router.query.page;

    // console.log("page", page)

    const handleDetail = (e) => {
        setIsButtonClick(true)
        setCardDetailShow(true)
        setButtonValue(e.target.value)
    }

    const totalValue = GrowthPlanCategoryList.reduce((accumulator, currentObject) => {
        return accumulator + currentObject.price;
    }, 0)

    const stringTotalValue = totalValue
    const finalTotalValue = parseInt(stringTotalValue.match(/\d+/)[0]).toLocaleString();

    return (
        <>
            <CardDetailModal
                show={cardDetailShow}
                onHide={() => setCardDetailShow(false)}
                isbuttonclick={isbuttonclick}
                buttonValue={buttonValue}
            />
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                router={router}
                page={page}
                CountryListApi={CountryListApi}
            />
            <ToastContainer />
            <section className="container-fluid p-0">
                <div className={styles.growthBg}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className={styles.growthHeader}>
                                    <h1>Online Growth Package</h1>
                                    <p>What all values will you get inside this complete online
                                        Growth Package.</p>
                                </div>
                                <div className="growthTimeline">
                                    <VerticalTimeline>
                                        {GrowthPlanCategoryList.map((curElt, index) => {
                                            return (
                                                <>
                                                    <VerticalTimelineElement
                                                        className="vertical-timeline-element--work"
                                                        icon={
                                                            <Image src={`/category/icons/${curElt.icon}.png`} alt="asdsa" width={30} height={30} className="img-fluid" />
                                                        }
                                                        key={index + 1}
                                                    >
                                                        <div className={styles.growthPlan}>
                                                            <div className={styles.subCategoryCardBg}>
                                                                <div className={styles.subCategoryCard}>
                                                                    <div className={styles.subCategoryCardContent}>
                                                                        <div className={styles.iconName}>
                                                                            <div className={styles.subCategoryCardIcon}>
                                                                                <div
                                                                                    className={styles.subCategoryCardIconOverlay}
                                                                                >
                                                                                    <Image src={`/category/icons/${curElt.icon}.png`} alt="asdsa" width={40} height={40} className="img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            <h4>{curElt.name}</h4>

                                                                        </div>
                                                                        <div className={styles.price}>
                                                                            Value
                                                                            <br />
                                                                            <div>₹{curElt.price}</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={styles.viewBtn} >
                                                                <button type="button" value={curElt.name} onClick={handleDetail}>Detail</button>
                                                            </div>
                                                        </div>
                                                    </VerticalTimelineElement>
                                                </>
                                            )
                                        })}

                                    </VerticalTimeline>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className={styles.finalPrice}>
                                    <span>Total value you get</span>
                                    <br />
                                    <div>₹{finalTotalValue}</div>
                                </div>
                                <div className={styles.grabOffer} onClick={() => setModalShow(true)}>
                                    Grab This Offer Now at ₹24,999/- only
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};


function CardDetailModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="enquiryModal"
        >
            <Modal.Body>
                {props.isbuttonclick === true &&

                    <>
                        {GrowthPlanCategoryList.map(curSubCategory => {
                            return (
                                <>
                                    {props.buttonValue === curSubCategory.name &&
                                        <div className={styles.categoryModalContent}>
                                            <div className={styles.closeBtn}>
                                                <button onClick={props.onHide}>
                                                    <Image src="/icons/close.png" width={20} height={20} alt="close" className="img-fluid" />
                                                </button>
                                            </div>
                                            <div className={styles.categoryModalContentTitle}><h2>{curSubCategory.name}</h2> </div>

                                            {curSubCategory?.description?.map((curDesc, index) => {
                                                return (
                                                    <>
                                                        <p key={index + 1}>{curDesc}</p>
                                                    </>
                                                )
                                            })}
                                            <h4>What will you get inside this Package? </h4>
                                            <ul>
                                                {curSubCategory?.points?.map((curPoint, index) => {
                                                    return (

                                                        <li key={index + 1}>{curPoint}</li>

                                                    )
                                                })}
                                            </ul>


                                        </div>
                                    }
                                </>
                            )
                        })}

                        {props.buttonValue === "Bonus 1" &&

                            <div className={styles.categoryModalContent}>
                                <div className={styles.closeBtn}>
                                    <button onClick={props.onHide}>
                                        <Image src="/icons/close.png" width={20} height={20} alt="close" className="img-fluid" />
                                    </button>
                                </div>
                                <div className={styles.categoryModalContentTitle}><h2>Bonus 1</h2> <div><span>Priceless</span></div></div>
                                <h4>What will you get inside this Package? </h4>
                                <ul>
                                    <li>Digrowfa Special </li>
                                    <li>Professional Account Setup on Digrowfa</li>
                                    <li>Online Shop Creation On Digrowfa </li>
                                    <li>10 products or services listing on Digrowfa</li>
                                    <li>10 Shouts Uploading On Digrowfa </li>
                                    <li>Digital Card Creation On Digrowfa</li>
                                    <li>Digrowfa Account Handling Training </li>
                                </ul>
                            </div>

                        }
                        {props.buttonValue === "Bonus 2" &&

                            <div className={styles.categoryModalContent}>
                                <div className={styles.closeBtn}>
                                    <button onClick={props.onHide}>
                                        <Image src="/icons/close.png" width={20} height={20} alt="close" className="img-fluid" />
                                    </button>
                                </div>
                                <div className={styles.categoryModalContentTitle}><h2>Bonus 1</h2> <div><span>Priceless</span></div></div>
                                <h4>What will you get inside this Package? </h4>
                                <ul>
                                    <li>Online Business Management Growth Training  </li>
                                    <li>Live or Video Both Options Are Available </li>
                                    <li>Every Week Q&A Session with MAHA Qadri  </li>
                                    <li>Lifetime access </li>
                                </ul>
                            </div>

                        }
                    </>

                }
            </Modal.Body>
        </Modal>
    );
}

function MyVerticallyCenteredModal(props) {

    const [input, setInput] = useState({})
    const [location, setLocation] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [category] = useState(CategoryList);
    const [categoryName, setCategoryName] = useState("")
    const [countryList, setCountryList] = useState(props.CountryListApi)



    const removeForwardSlash = (str) => {
        return str?.replace(/\//g, '');
    };
    const pageName = props.page
    const stringWithoutSlash = removeForwardSlash(pageName);





    useEffect(() => {
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
        try {
            await axios.post(`${BASEURL}api/dgf/growth/add-enquiry`, {
                name: input.name,
                email: input.email,
                phone: input.phone,
                businessName: input.orgainzation,
                country: location.country,
                industry: categoryName,
                state: location.state,
                city_district: location.city_district,
                postcode: location.postcode,
                address: input.address,
                message: input.message,
            }).then((data) => {
                if (data.data.errorcode === 0) {
                    setIsLoading(true)
                    props.router.push('/growth-plan/thank-you');
                } else if (data.data.errorcode === 2) {
                    toast.warn(`${data.data.errorcode}`, {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }
            });
        } catch (error) {
            toast.warn('Please fill all Feilds', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            console.log(error)
        }

    }



    return (

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="enquiryModal"
        >

            <Modal.Body>

                <div className={form.formBox}>
                    <div className={styles.closeBtn}>
                        <button onClick={props.onHide}>
                            <Image src="/icons/close.png" width={20} height={20} alt="close" className="img-fluid" />
                        </button>
                    </div>

                    <Form onSubmit={handleSubmit}>
                        {/* <p>{stringWithoutSlash}</p> */}
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <Form.Select
                                    aria-label="Default select example "
                                    className="mb-3"
                                    name="categoryName"
                                    id="categoryName"
                                    value={categoryName}
                                    onChange={(e) => setCategoryName(e.target.value)}
                                    required

                                >
                                    <option>Industry</option>
                                    {category.map((curElt, index) => {

                                        return (
                                            <>
                                                <option key={index} selected={curElt.url === stringWithoutSlash} value={curElt.name} >{curElt.name}</option>
                                            </>
                                        );
                                    })}
                                    <option value="Other">Other</option>
                                </Form.Select>
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
                                        required
                                    />
                                </Form.Group>
                            </div>
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
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="number"
                                        placeholder="Contact Number"
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
                                <Form.Select aria-label="Default select example">
                                    {countryList && countryList?.map((curElt, index) => {
                                        return (
                                            <>
                                                <option key={index} selected={curElt.name === "India"} value={curElt.name}>{curElt.name}</option>
                                            </>
                                        )
                                    })}

                                </Form.Select>
                                {/* <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Country"
                                        name="country"
                                        id="country"
                                        value={location?.country}
                                        required
                                    />
                                </Form.Group> */}
                            </div>

                            {/* <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="State"
                                        name="state"
                                        id="state"
                                        value={location?.state}
                                    />
                                </Form.Group>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="City District"
                                        name="city_district"
                                        id="city_district"
                                        value={location?.city_district}
                                    />
                                </Form.Group>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="postcode"
                                        name="postcode"
                                        id="postcode"
                                        value={location?.postcode}
                                    />
                                </Form.Group>
                            </div> */}
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Address"
                                        name="address"
                                        id="address"
                                        value={input.address}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        as="textarea"
                                        rows={6}
                                        placeholder="Short description about your business"
                                        name="message"
                                        id="message"
                                        value={input.message}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </div>
                            {/* <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
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
                            </div> */}
                            {/* <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className={form.formConditions}>
                                    <p>
                                        For further details on how your personal data will be
                                        processed and how your consent can be managed, refer to the{" "}
                                    </p>
                                </div>
                            </div> */}
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
            </Modal.Body>
        </Modal>
    );
}
