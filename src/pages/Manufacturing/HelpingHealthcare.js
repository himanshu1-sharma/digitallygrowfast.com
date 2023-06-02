import styles from '@/styles/Services.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import Image from 'next/image'

export default function HelpingHealthcare() {
    return (
        <>
            <section className="container-fluid p-0">
                <div className={styles.helpingHealthareBg}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-8'>
                                <div className={styles.title}>
                                    <h2>Complete <span>Growth Solutions</span> According To Your Business Needs </h2>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className={styles.helpingHealthareContent}>
                                    <p>Meeting the rapidly increasing demands of consumers within the Manufacturing industry is a complex challenge, but one that we are well-equipped to help you conquer. Our commitment to keeping our clients ahead of the competition is unwavering, and we achieve this by harnessing the power of innovation. By seamlessly integrating cutting-edge tools and software with your manufacturing processes, you can achieve your production objectives with ease and position your business for ongoing success.</p>
                                    <p>As a leading provider of Manufacturing Growth solutions, we recognize the unique and evolving needs of companies within this industry. That's why we offer a range of customizable Growth products that can be seamlessly integrated with your existing processes, ensuring optimal efficiency and effectiveness.</p>
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
                                                <Image src="/category/Manufacturing/1.png" width={676} height={490} alt="helping Healthare" className="img-fluid" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className={styles.careSliderImg}>
                                                <Image src="/category/Manufacturing/2.png" width={676} height={490} alt="helping Healthare" className="img-fluid" />
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
