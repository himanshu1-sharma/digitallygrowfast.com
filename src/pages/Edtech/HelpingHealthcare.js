import styles from '@/styles/Services.module.css'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";

export default function HelpingHealthcare() {
    return (
        <>
            <section className="container-fluid p-0">
                <div className={styles.helpingHealthareBg}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-8'>
                                <div className={styles.title}>
                                    <h2>Get Your Complete <span>eLearning Growth Solution</span> Under One Roof</h2>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className={styles.helpingHealthareContent}>
                                    <p>Education Online Growth Solutions Platform facilitates the remote learning needs of educational institutions–by leveraging established and emerging technologies. We support ed-tech firms and other education stakeholders in digital education enablement overcoming the present limitations of physical interactions. Through custom E-Learning Development Services, we augment online learning by providing a virtual, robust, and student-centric technology infrastructure.</p>
                                    <p>From developing Learning Management Systems (LMS) to offering E-Learning Mobile App Development based on immersive technologies like AI, AR, and VR – we have experience in deploying a wide range of education technology solutions. Our proven expertise in student lifecycle solutions uniquely positions us as a leader among other Education Software Development Companies.</p>
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className={`${styles.helpingHealthareContent} ${styles.helpingHealthareContentImg}`}>
                                    <Swiper
                                        spaceBetween={30}
                                        centeredSlides={true}
                                        effect={"fade"}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false,
                                        }}
                                        // pagination={{
                                        //     clickable: true,
                                        // }}
                                        // navigation={true}
                                        modules={[EffectFade, Autoplay, Pagination, Navigation]}
                                        className="careSlider"
                                    >
                                        <SwiperSlide>
                                            <div className={styles.careSliderImg}>
                                                <Image src="/category/edTech/1.png" width={676} height={490} alt="helping Healthare" className="img-fluid" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className={styles.careSliderImg}>
                                                <Image src="/category/edTech/2.png" width={676} height={490} alt="helping Healthare" className="img-fluid" />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
