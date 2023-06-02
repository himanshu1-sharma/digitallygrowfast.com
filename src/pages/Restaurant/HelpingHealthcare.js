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
                                    <h2>Complete <span>Growth Solutions</span> for Your Restaurant</h2>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className={styles.helpingHealthareContent}>
                                    <p>Looking to manage your restaurant's growth and make informed decisions based on actionable insights? Look no further than our comprehensive solutions and services. Our Growth solution for restaurants is designed to provide you with a customized portal that combines accounting services and industry-specific tools and applications, available 24/7.</p>
                                    <p>With Digitally Grow Fast, you'll have access to a personalized dashboard that delivers key metrics in real time, as well as historical data for comparison. Choose from a variety of reporting categories, such as weekly prime cost, inventory tracking, cost as a percentage of sales, and payroll for hourly employees. Our solution empowers you to maintain financial control over your restaurant business by consolidating data from multiple financial systems into a single reporting platform.</p>
                                    <p>Digitally Grow Fast tracks a range of critical metrics, including POS data, payroll, accurate daily labor costs, COGS as a percentage of sales, and more. By providing a comprehensive view of your overall profit margins, we can help you make timely decisions to maximize your restaurant's success. Let us work with you to create a customized solution that frees you to focus on what you do best — running your restaurant.</p>
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
                                                <Image src="/category/restaurant/1.png" width={676} height={490} alt="helping Healthare" className="img-fluid" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className={styles.careSliderImg}>
                                                <Image src="/category/restaurant/2.png" width={676} height={490} alt="helping Healthare" className="img-fluid" />
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
