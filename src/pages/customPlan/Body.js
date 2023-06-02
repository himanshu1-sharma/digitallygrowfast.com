import React, { useState, useEffect } from "react";
import styles from "@/styles/CustomPlan.module.css";
import form from "@/styles/Contact.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Pagination, FreeMode } from "swiper";
import Form from "react-bootstrap/Form";
import CustomPlanCategoryList from "@/api/CustomPlanCategory";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/common/Button";
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import SweetAlert from "react-bootstrap-sweetalert";
import { BASEURL } from "@/configs/constants";
import { useRouter } from "next/router";
import Spinner from 'react-bootstrap/Spinner';
import CategoryList from "@/api/CategoryApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CountryListApi from "@/api/CountryApi";


export default function Header() {
    const [selected, setSelected] = useState();
    const [selectedValues, setSelectedValues] = useState([]);
    const [buttonValue, setButtonValue] = useState("")
    const [isbuttonclick, setIsButtonClick] = useState(false)
    const [customFormModal, setCustomFormModal] = useState(false);
    const [cardDetailShow, setCardDetailShow] = useState(false);
    const router = useRouter();


    const handleChange = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setSelectedValues([...selectedValues, value]);
        } else {
            setSelectedValues(selectedValues.filter((val) => val !== value));
        }
    };


    const handleDetail = (e) => {
        setIsButtonClick(true)
        setCardDetailShow(true)
        setButtonValue(e.target.value)
    }

    console.log("selected", selected);
    // console.log("isChecked", isChecked);
    // console.log("selectedValues", selectedValues);
    // console.log("buttonValue", buttonValue);

    return (
        <>
            <CardDetailModal
                show={cardDetailShow}
                onHide={() => setCardDetailShow(false)}
                isbuttonclick={isbuttonclick}
                buttonValue={buttonValue}
            />
            <CustomFormModal
                show={customFormModal}
                onHide={() => setCustomFormModal(false)}
                backdrop="static"
                keyboard={false}
                selectedValues={selectedValues}
                router={router}
                CountryListApi={CountryListApi}
            />
            <ToastContainer />
            <section className="container-fluid p-0">
                <div className={styles.customPlanHeader}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className={styles.headerText}>
                                    <h1>
                                        Discover the ideal Growth  <br />
                                        <span>services without delay</span>
                                    </h1>
                                    <p>Select services as per your requirment</p>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-10">
                                <div className={styles.headerCategorySlider}>
                                    <Swiper
                                        slidesPerView={1}
                                        grabCursor={true}
                                        spaceBetween={10}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        breakpoints={{
                                            320: {
                                                slidesPerView: "auto",
                                                centeredSlides: true,
                                                loop: true
                                            },
                                            640: {
                                                slidesPerView: 2,
                                            },
                                            768: {
                                                slidesPerView: 2,
                                            },
                                            1024: {
                                                slidesPerView: 4,
                                            },
                                        }}
                                        modules={[Pagination]}
                                        className="customPlanCategory"
                                    >
                                        {CustomPlanCategoryList.map((curElt, index) => {
                                            return (
                                                <>

                                                    <SwiperSlide key={index + 1}>
                                                        <label className={styles.categoryBoxLabel}>
                                                            <input
                                                                type="radio"
                                                                className={styles.selectInput}
                                                                name="selected"
                                                                value={curElt.name}
                                                                onClick={(e) => setSelected(e.target.value)}
                                                            />
                                                            <div className={styles.categoryBoxBg}>
                                                                <div className={styles.categoryBox}>

                                                                    {/* <div className={styles.categoryCheck}></div> */}
                                                                    <div className={styles.customCategoryImage} style={{ backgroundImage: `url(/category/${curElt.image}.png)` }}></div>
                                                                    <div className={styles.categoryName}>
                                                                        <h4>{curElt.name}</h4>
                                                                    </div>


                                                                </div>
                                                            </div>
                                                        </label>
                                                    </SwiperSlide>
                                                </>
                                            )
                                        })}



                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                    {selected === undefined ? null :
                        <div id="subCategory">
                            <section className="container-fluid p-0">
                                <div>
                                    <div className="container">

                                        {CustomPlanCategoryList.map(curCatName => {

                                            return (
                                                <>
                                                    {selected === curCatName.name &&
                                                        <>
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <div className={styles.title}>
                                                                        <h2>{selected}</h2>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <div className={styles.subCategoryList}>
                                                                        <Form>
                                                                            <div className={styles.subCategoryCardContainer}>
                                                                                <div className="row d-flex justify-content-center">

                                                                                    {curCatName?.subcategoryDatail?.map((curElt, index) => {
                                                                                        return (
                                                                                            <>
                                                                                                <div className="col-xl-4 col-lg-6 col-md-7 col-sm-12 col-12">
                                                                                                    <div className={styles.checkbox} key={index + 1}>
                                                                                                        <label className={styles.selecteInput}>
                                                                                                            <input
                                                                                                                type="checkbox"
                                                                                                                value={curElt.name}
                                                                                                                onChange={handleChange}
                                                                                                                checked={selectedValues.includes(`${curElt.name}`)}
                                                                                                                className={styles.selectedInput}
                                                                                                            />
                                                                                                            <div className={styles.subCategoryCardBg}>
                                                                                                                <div className={styles.subCategoryCard}>
                                                                                                                    <div className={styles.subCategoryCardOverlay}></div>
                                                                                                                    <div className={styles.subCategoryCardContent}>
                                                                                                                        <div className={styles.iconName}>
                                                                                                                            <div className={styles.subCategoryCardIcon}>
                                                                                                                                <div
                                                                                                                                    className={styles.subCategoryCardIconOverlay}
                                                                                                                                >
                                                                                                                                    <Image src={`/category/icons/${curElt.icon}.png`} alt={curElt.name} width={40} height={40} className="img-fluid" />
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <h4>{curElt.name}</h4>
                                                                                                                        </div>
                                                                                                                        <div className={styles.price}>
                                                                                                                            starting from
                                                                                                                            <br />
                                                                                                                            <div>₹{curElt.price}</div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div className={styles.cardButton}>
                                                                                                                        <div className={styles.selectInputBtn}>
                                                                                                                            Add
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </label>
                                                                                                        <div className={styles.viewBtn} >
                                                                                                            <button type="button" value={curElt.name} onClick={handleDetail}>Detail</button>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </>
                                                                                        )
                                                                                    })}

                                                                                </div>




                                                                            </div>
                                                                        </Form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>

                                                    }
                                                </>
                                            )
                                        })}

                                    </div>
                                </div>
                            </section>
                        </div>

                    }
                </div>
            </section>



            {selectedValues.length > 0 &&
                <div className={styles.selectedBox}>
                    <div className={styles.selectedCategory}>
                        <h4>Selected</h4>
                        <div className={styles.selectedPointContainer}>
                            <Swiper
                                slidesPerView={7}
                                grabCursor={true}
                                freeMode={true}
                                spaceBetween={10}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 3
                                    },
                                    640: {
                                        slidesPerView: 4,
                                    },
                                    768: {
                                        slidesPerView: 5,
                                    },
                                    1024: {
                                        slidesPerView: 7,
                                    },
                                }}
                                modules={[FreeMode, Pagination]}
                                className="selectedPointSlider"
                            >
                                {selectedValues && selectedValues.map((curElt, index) => {
                                    return (
                                        <>
                                            <SwiperSlide>
                                                <div className={styles.selectedPoint} key={index + 1}>{curElt}</div>
                                            </SwiperSlide>
                                        </>
                                    )
                                })}

                            </Swiper>

                        </div>
                    </div>
                    <div className={styles.selectedCategoryBtn}>
                        <div onClick={() => setCustomFormModal(true)}>
                            <button>Next</button>
                        </div>
                    </div>
                </div>
            }






        </>

    );
}


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
                        {CustomPlanCategoryList.map(curCategory => {
                            return (
                                <>
                                    {curCategory.subcategoryDatail.map(curSubCategory => {
                                        return (
                                            <>
                                                {props.buttonValue === curSubCategory.name &&
                                                    <div className={styles.categoryModalContent}>
                                                        <div className={styles.closeBtn}>
                                                            <button onClick={props.onHide}>
                                                                <Image src="/icons/close.png" width={20} height={20} alt="close" className="img-fluid" />
                                                            </button>
                                                        </div>
                                                        <div className={styles.categoryModalContentTitle}><h2>{curSubCategory.name}</h2></div>
                                                        <h4>Overview</h4>
                                                        {curSubCategory?.description?.map((curDesc, index) => {
                                                            return (
                                                                <>
                                                                    <p key={index + 1}>{curDesc}</p>
                                                                </>
                                                            )
                                                        })}
                                                        <h4>What will you get</h4>
                                                        <ul>
                                                            {curSubCategory?.points?.map((curPoint, index) => {
                                                                return (

                                                                    <li key={index + 1}>{curPoint}</li>

                                                                )
                                                            })}
                                                        </ul>
                                                        {curSubCategory.name === "Search Engine Optimization (SEO)" &&

                                                            <>
                                                                <h4>⦿ SEO Audit</h4>
                                                                <ul>
                                                                    <li>Keyword Research</li>
                                                                    <li>Meta tags writing (title & Description tags)</li>
                                                                    <li>Image Optimization (alt tags)</li>
                                                                    <li>Google Webmaster & Analytics Integration</li>
                                                                    <li>Create or Update Robot.txt</li>
                                                                    <li>Resolve Webmaster Crawl Errors</li>
                                                                    <li>Creating/updating HTML & XML Sitemap</li>
                                                                    <li>Submitting XML sitemap to Google webmaster tool</li>
                                                                    <li>Internal Linking structure correction</li>
                                                                    <li>Canonicalization error correction</li>
                                                                    <li>Website Page Speed Optimization</li>
                                                                    <li>Implementing all on-page changes over the website</li>

                                                                </ul>
                                                                <h4>⦿ OFF Page Optimization</h4>
                                                                <ul>
                                                                    <li>Directory Submission</li>
                                                                    <li>Social Bookmarking</li>
                                                                    <li>Article submissions</li>

                                                                </ul>
                                                                <h4>⦿ Reports</h4>
                                                                <ul>
                                                                    <li>Website audit report</li>
                                                                    <li>Keyword research report</li>
                                                                    <li>ON Page recommendation report</li>
                                                                    <li>ON Page implementation report</li>
                                                                    <li>Keyword ranking report</li>
                                                                </ul>
                                                            </>

                                                        }
                                                        <p>{curSubCategory.lastDesc}</p>

                                                    </div>
                                                }
                                            </>
                                        )
                                    })}
                                </>
                            )
                        })}
                    </>

                }
            </Modal.Body>
        </Modal>
    );
}


function CustomFormModal(props) {

    const [input, setInput] = useState({})
    const [location, setLocation] = useState('')
    const [showAlert, setShowAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [category] = useState(CategoryList);
    const [categoryName, setCategoryName] = useState("")
    const [countryList, setCountryList] = useState(props.CountryListApi)



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
            await axios.post(`${BASEURL}api/dgf/custom/add-enquiry`, {
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
                requirement: props.selectedValues
            }).then((data) => {
                if (data.data.errorcode === 0) {
                    setIsLoading(true)
                    props.router.push('/custom-plan/thank-you');
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

        // console.log("name", input.name)
        // console.log("email", input.email)
        // console.log("phone", input.phone)
        // console.log("businessName", input.orgainzation)
        // console.log("country", location.country)
        // console.log("state", location.state)
        // console.log("city_district", location.city_district)
        // console.log("postcode", location.postcode)
        // console.log("address", input.address)
        // console.log("message", input.message)
        // console.log("requirement", props.selectedValues)
        // console.log("industry:", categoryName,)
    }

    const handleHideAlert = () => {
        setShowAlert(false);
        setShowErrorAlert(false);
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="enquiryModal"
        >

            <Modal.Body>
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
                    <p>Please Fill All Feilds</p>
                </SweetAlert>
                <div className={form.formBox}>
                    <div className={styles.closeBtn}>
                        <button onClick={props.onHide}>
                            <Image src="/icons/close.png" width={20} height={20} alt="close" className="img-fluid" />
                        </button>
                    </div>

                    <Form onSubmit={handleSubmit}>
                        <div className={styles.selectedTags}>
                            <ul>
                                {props.selectedValues?.map((curElt, index) => {
                                    return (
                                        <>
                                            <li key={index + 1}>{curElt}</li>
                                        </>
                                    )
                                })}
                            </ul>
                        </div>
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
                                                <option value={curElt.name} key={index}>{curElt.name}</option>
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
                                <Form.Select aria-label="Default select example">
                                    {countryList && countryList?.map((curElt, index) => {
                                        return (
                                            <>
                                                <option key={index} selected={curElt.name === "India"} value={curElt.name}>{curElt.name}</option>
                                            </>
                                        )
                                    })}

                                </Form.Select>
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