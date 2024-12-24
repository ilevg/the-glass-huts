import styles from './Checkout.module.scss'
import Title from "../../UI/title/Title"
import about_4 from '../../assets/images/about/about-4.png'
import MyButton from '../../UI/myButton/MyButton'
import { Link } from 'react-router-dom'
import { useBookingContext } from '../../context'
import { format } from "date-fns"

const Checkout = () => {
    const { start, end, guestsNumb, priceWithoutOptions, totalPrice, options, days } = useBookingContext()

    const onClick = (index: number) => {
        return true
    }
    return (
        <section className={styles.booking}>
            <Title titleText='Checkout' bg={about_4} />
            <div className={styles.bookingCont}>
                <div className={styles.services}>
                    <h2 className={styles.subTitle}>Personal Information</h2>

                    <form className={styles.form} action="">
                        <div className={styles.inputsCont}>
                            <input className={styles.input} type="text" name='fName' placeholder='First Name' />
                            <input className={styles.input} type="text" name='lName' placeholder='Last Name' />
                        </div>
                        <div className={styles.inputsCont}>
                            <input className={styles.input} type="email" name='email' placeholder='Email' />
                            <input className={styles.input} type="tel" name='tel' placeholder='Phone Number' />
                        </div>
                    </form>

                    <h2 className={styles.subTitle}>Pay with Card</h2>
                    <form action="" className={styles.form}>
                        <div className={styles.inputsCont}>
                            <input className={styles.input} type="number" name='cardNumber' placeholder='Card Number' />
                        </div>
                        <div className={styles.inputsCont}>
                            <input className={styles.input} type="number" name='cardCcv' placeholder='CCV' />
                            <input className={styles.input} type="date" name='cardExp' placeholder='Expiration' />
                        </div>
                    </form>

                    <h2 className={styles.subTitle}>Additional Information</h2>
                    <div className={styles.descCont}>
                        <textarea className={styles.textarea} placeholder='Leave a message' ></textarea>
                    </div>
                    <div>
                        <input type='checkbox' id='termsCheck' />
                        <label htmlFor="termsCheck">
                            I have read and accept
                            <Link to='/terms'>Terms & Conditions</Link>
                        </label>
                    </div>
                    <MyButton width='100%' text='CONFIRM AND PAY' bg='#5B6460' />
                </div>

                <div className={styles.priceCardCont}>
                    <h2 className={styles.subTitle}>Total</h2>
                    <div className={styles.priceCard}>
                        <div>
                            <span className={styles.priceDay}>The Glass Hut</span><span> • Vesterborg, Denmark</span>
                        </div>

                        <div className={styles.chooseDate}>
                            <form className={styles.chooseInputCont}>
                                <span>Check in</span>
                                <span>{start && format(start, 'd MMM yyyy')}</span>
                            </form>

                            <div className={styles.line}></div>

                            <form className={styles.chooseInputCont}>
                                <span>Check out</span>
                                <span>{end && format(end, 'd MMM yyyy')}</span>
                            </form>

                            <div className={styles.line}></div>

                            <form className={styles.chooseInputCont}>
                                <span>Guests</span>
                                <span>{guestsNumb}</span>
                            </form>
                        </div>

                        <div className={styles.priceCont}>
                            <span>3.200kr x {days} nights</span>
                            <span> {priceWithoutOptions}kr</span>
                        </div>
                        {
                            options.length > 0 && options.map((option) => (
                                <div key={option.title} className={styles.priceCont}>
                                    <span>{option.title}</span>
                                    <span>{option.desc}</span>
                                </div>
                            ))
                        }
                        <div className={styles.priceCont}>
                            <span>Discount</span>
                            <span>0kr</span>
                        </div>

                        <span className={styles.border}></span>
                        <div className={`${styles.priceCont} ${styles.priceTotalCont}`}>
                            <span>Total</span>
                            <span>{totalPrice}kr</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout
