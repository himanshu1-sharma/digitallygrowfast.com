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
                                    <h2>Build Your <span>Online Presence</span> with <span>Digitally</span> Grow Fast</h2>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className={styles.helpingHealthareContent}>
                                    <p>The secret to winning the Online Store game lies in having an online presence that matches</p>
                                    <p>the expectations of your audience and compels them to convert. And it calls for the Online Store </p>
                                    <p>Online Growth Solutions expertise laser-focused on Online presence. To attract the desired audience, you need an online store that is visually stunning and conversion-focused</p>
                                    <p>Whether you are a start-up, an evolving business, or an established brand, we can help you grow in the digital space. With a team that understands e-commerce like the back of its hand and has in-depth know-how about all the popular development platforms, we emerge as a partner you can trust. We not only assist businesses in creating e-commerce solutions that
                                        give them a solid foundation but also ensure that they run seamlessly through their evolution.
                                    </p>
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
                                                <Image src="/category/onlineStore/1.png" width={676} height={490} alt="helping Healthare" className="img-fluid" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className={styles.careSliderImg}>
                                                <Image src="/category/onlineStore/2.png" width={676} height={490} alt="helping Healthare" className="img-fluid" />
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
