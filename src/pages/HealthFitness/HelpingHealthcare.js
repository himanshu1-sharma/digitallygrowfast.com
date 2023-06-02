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
                                    <h2>Improve <span>Digital Health</span> & <span>Fitness Customer</span> experience</h2>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className={styles.helpingHealthareContent}>
                                    <p>Understand the unique challenges & opportunities and make growth strategies backed with market insights</p>
                                    <p>We work with Health & Fitness and fitness companies to assess their needs and identify areas where digital health technologies can have the most impact. By understanding the unique challenges and opportunities of the organization, we develop a tailored plan that addresses the specific needs of the organization.</p>
                                    <p>Once the needs have been assessed, we evaluate the available technologies and recommend the most suitable solutions. We also provide guidance on the integration of new technologies with existing systems and processes, ensuring a seamless transition. Also, assist with the implementation of digital health technologies and provide training and support to the organization's staff. This can help to ensure that the new technologies are used effectively and that the organization can fully realize the benefits of the investment.</p>
                                    <p>Digital health technologies generate vast amounts of data, and we help health organizations to manage and analyze this data. we help health organizations to implement Growth Strategy measures and ensure give the best Health & Fitness online growth solutions.</p>
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
                                                <Image src="/category/healthFitness/1.png" width={676} height={490} alt="helping Healthare" className="img-fluid" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className={styles.careSliderImg}>
                                                <Image src="/category/healthFitness/2.png" width={676} height={490} alt="helping Healthare" className="img-fluid" />
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
