import styles from '@/styles/Button.module.css'

export default function Button({ name }) {
    return (
        <>
            <div className={styles.commonButton}>
                <button>{name}</button>
            </div>
        </>
    )
};
