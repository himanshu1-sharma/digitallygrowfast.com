import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import ImageList, { ImageList1, ImageList2 } from "@/api/ImageApi.js";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Button from "@/components/common/Button";
import TestimonialApi from "@/api/TestimonialApi";


export default function Testimonial() {
    const [image] = useState(ImageList);
    const [image1] = useState(ImageList1);
    const [image2] = useState(ImageList2);
    const [TestimonialData] = useState(TestimonialApi);

    return (
        <>

            <section className="container-fluid p-0">
                <div className={styles.testimonialBg}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                                <div className={styles.testimonialAnimationBox}>
                                    <div>
                                        <div className={`${styles.testimonialAnimation} ${styles.one1}`}
                                        >
                                            {image2.map((curElt, index) => {
                                                return (
                                                    <>
                                                        <div className={styles.testimonialAnimationImg} key={index}>
                                                            <Image
                                                                src={`/home/${curElt.imgUrl}.png`}
                                                                alt={curElt.imgName}
                                                                width={117}
                                                                height={117}
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                    </>
                                                );
                                            })}
                                        </div>
                                        <div className={`${styles.testimonialAnimation} ${styles.one2}`}
                                        >
                                            {image2.map((curElt, index) => {
                                                return (
                                                    <>
                                                        <div className={styles.testimonialAnimationImg} key={index}>
                                                            <Image
                                                                src={`/home/${curElt.imgUrl}.png`}
                                                                alt={curElt.imgName}
                                                                width={117}
                                                                height={117}
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                    </>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div>
                                        <div className={`${styles.testimonialAnimation} ${styles.two1}`}
                                        >
                                            {image.map((curElt, index) => {
                                                return (
                                                    <>
                                                        <div className={styles.testimonialAnimationImg} key={index}>
                                                            <Image
                                                                src={`/home/${curElt.imgUrl}.png`}
                                                                alt={curElt.imgName}
                                                                width={117}
                                                                height={117}
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                    </>
                                                );
                                            })}
                                        </div>
                                        <div className={`${styles.testimonialAnimation} ${styles.two2}`}
                                        >
                                            {image.map((curElt, index) => {
                                                return (
                                                    <>
                                                        <div className={styles.testimonialAnimationImg} key={index}>
                                                            <Image
                                                                src={`/home/${curElt.imgUrl}.png`}
                                                                alt={curElt.imgName}
                                                                width={117}
                                                                height={117}
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                    </>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div>
                                        <div className={`${styles.testimonialAnimation} ${styles.three1}`}
                                        >
                                            {image1.map((curElt, index) => {
                                                return (
                                                    <>
                                                        <div className={styles.testimonialAnimationImg} key={index}>
                                                            <Image
                                                                src={`/home/${curElt.imgUrl}.png`}
                                                                alt={curElt.imgName}
                                                                width={117}
                                                                height={117}
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                    </>
                                                );
                                            })}
                                        </div>
                                        <div className={`${styles.testimonialAnimation} ${styles.three2}`}
                                        >
                                            {image1.map((curElt, index) => {
                                                return (
                                                    <>
                                                        <div className={styles.testimonialAnimationImg} key={index}>
                                                            <Image
                                                                src={`/home/${curElt.imgUrl}.png`}
                                                                alt={curElt.imgName}
                                                                width={117}
                                                                height={117}
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                    </>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
                                <div className={styles.testimonialSliderBg}>
                                    <h2>Pioneer today, inspire tomorrow <br /><span>Let’s here from our global Leaders  </span></h2>
                                    <div className="testimonialSliderBg">
                                        <Swiper
                                            pagination={{
                                                clickable: true,
                                            }}
                                            navigation={{
                                                clickable: true,
                                            }}
                                            modules={[Pagination, Navigation]}
                                            className="testimonialSlider"
                                        >
                                            {TestimonialData && TestimonialData.map((curElt, index) => {
                                                return (
                                                    <>
                                                        <SwiperSlide key={index}>
                                                            <div className={styles.testimonialSliderBox}>
                                                                <div className={styles.testimonialSliderImg}>
                                                                    <Image src={`/client/${curElt.img}.png`} width="272" height="110" alt={curElt.name} className="img-fluid" />
                                                                </div>
                                                                <div className={styles.testimonialSliderContent}>
                                                                    <div className={styles.testimonialUserAbout}>
                                                                        <div className={styles.testimonialUserName}>
                                                                            <h4>{curElt.name}</h4>
                                                                            <label>{curElt.position}</label>
                                                                        </div>
                                                                        {/* <div className={styles.testimonialUserSocialLinks}>
                                                                            <Link href="">
                                                                                <FontAwesomeIcon icon={faTwitter} />
                                                                            </Link>
                                                                            <Link href="">
                                                                                <FontAwesomeIcon icon={faLinkedinIn} />
                                                                            </Link>
                                                                        </div> */}
                                                                    </div>
                                                                    <h6>{curElt.companyName}</h6>
                                                                    <p>{curElt.comment}</p>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    </>
                                                )
                                            })}

                                        </Swiper>
                                    </div>
                                    {/* <Link href="">
                                        <Button name="Explore" />
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
