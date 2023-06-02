import Card from '@/components/common/Card'
import styles from '@/styles/Home.module.css'

export default function BusinessGoals() {
    return (
        <>
            <section className="container-fluid p-0">
                <div className={styles.businessGoalsBg}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12'>
                                <div className={styles.businessGoalsTitle}>
                                    <div className={styles.titleUpper}>
                                        <h5>Why Choose Us</h5>
                                    </div>
                                    <h2>We Provide the Best Solutions
                                        To Achieve Your  <span>Business Goals </span></h2>
                                </div>
                            </div>
                            <div className='col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12'>
                                <div className={styles.businessGoalsCardBox}>
                                    <div className='row'>
                                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                                            <Card
                                                title="App  "
                                                span="Development"
                                                subtitle="We Develop Awesome Mobile Apps"
                                                description="We create high-quality iOS and Android apps that surpass your expectations. Our Growth Solution company is a leader when it comes to building scalable and responsive mobile apps. We will not only help you sustain your business but also expand it through our extensive experience."
                                            />
                                        </div>
                                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                                            <Card
                                                title="Creatives &  "
                                                span="Designing"
                                                subtitle="Experience in the field of design, illustration, and marketing."
                                                description="“Digitally Grow Fast” offers you expertise and proven experience in working toward the branding and creative aspects of a product. If you’re looking for Solutions for relationship management that inspire innovative and creative ideas, then take a quick look at our previous creations designed for our clients."
                                            />
                                        </div>
                                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                                            <Card
                                                title="PWA "
                                                span="Development"
                                                subtitle="PWAs are built using modern browser technologies "
                                                description="With our team of developers, startups, SMEs, and large corporations can benefit from seamless digital experiences. During the decision-making process, our PWA specialists will guide you right from evaluations to solutions and technology choices, so that you can keep up with the competition."
                                            />
                                        </div>

                                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                                            <Card
                                                title="Brand "
                                                span="growth"
                                                subtitle="Create and Manage Great Brands"
                                                description="The power of digital technology to connect brands with customers has increased the amount of information available to businesses, which can help them develop and refine their brand strategies. To help you take advantage of this new technology, we offer in-depth data analysis along with years of experience to help you create a successful brand identity."
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
