import MyButton from '../../../../UI/myButton/MyButton'
import styles from './BookCard.module.scss'

const BookCard = () => {
    return (
        <div className={styles.bookCard}>
            <MyButton width="280px" text="BOOK NOW" bg='var(--color-btn)' link='/booking' />
            <div className={styles.priceCont}>
                <span>from</span>
                <span className={styles.price}>€3.200</span>
                <span>per night</span>
            </div>
        </div>
    )
}

export default BookCard
