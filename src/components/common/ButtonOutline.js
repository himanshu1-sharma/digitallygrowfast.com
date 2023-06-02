import styles from '@/styles/Button.module.css'

export default function ButtonOutline({ name }) {
    return (
        <>
            <div className={styles.outlineButton}>
                <button>{name}</button>
            </div>
        </>
    )
};
