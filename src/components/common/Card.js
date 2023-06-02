import styles from '@/styles/Card.module.css'

export default function Card({ title, subtitle, description, span }) {
    return (
        <>
            <div className={styles.businessGoalsCardBg}>
                <div className={styles.businessGoalsCard}>
                    <div className={styles.businessGoalsCardTitle}>
                        <h4>{title} <br /> <span>{span}</span></h4>
                    </div>
                    <h6>{subtitle}</h6>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
};
