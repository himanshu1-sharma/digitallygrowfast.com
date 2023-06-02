import styles from '@/styles/Services.module.css'
import home from '@/styles/Home.module.css'
import Card from '@/components/common/Card'

export default function Goals() {
    return (
        <>
            <section className="container-fluid p-0">
                <div className={styles.goaleBg}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className={styles.title}>
                                    <h2 className='text-center'>Why <span>Choose Us </span></h2>
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-lg-8'>
                                <div className={styles.goalsCard}>
                                    <div className='row'>
                                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                                            <Card
                                                title="Customer"
                                                span="Satisfaction"
                                                description="We work on the latest frameworks and technologies to deliver you user-friendly, scalable, secure, and new business solutions as per your need."
                                            />
                                        </div>
                                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                                            <Card
                                                title="Integrity &"
                                                span="Transparency"
                                                description="We respect your ideas and vision, provide you with every small project detail regularly, and consider your worthy advice when and as needed."
                                            />
                                        </div>
                                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                                            <Card
                                                title="Competitive"
                                                span="Pricing"
                                                description="We offer an ideal combination of cost-effective rates with amazing quality to make sure the lowest pricing in our segment."
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
