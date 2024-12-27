import styles from './Checkout.module.scss'
import Title from "../../UI/title/Title"
import about_4 from '../../assets/images/about/about-4.png'
import MyButton from '../../UI/myButton/MyButton'
import { Link } from 'react-router-dom'
import { useBookingContext } from '../../context'
import { format } from "date-fns"
import { postOrder } from '../../services/apiService'
import { FormEvent, useEffect, useState } from 'react'
import CheckoutModal from './components/checkoutModal/CheckoutModal'

interface PersonalInfo {
    fName: string
    lName: string
    email: string
    phone: string
}
interface CardInfo {
    card: string
    ccv: string
    cardExpired: string
}
const Checkout = () => {
    const { start, end, guestsNumb, priceWithoutOptions, totalPrice, options, days } = useBookingContext()
    const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({ fName: '', lName: '', email: '', phone: '' })
    const [cardInfo, setCardInfo] = useState<CardInfo>({ card: '', ccv: '', cardExpired: '', })
    const [orderCreated, setOrderCreated] = useState<boolean>(false)

    const optionsToStr = options.map((opt) => opt.title).join(',')

    const orderSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        postOrder({
            check_in: start,
            check_out: end,
            guests: guestsNumb,
            options: optionsToStr,
            total: totalPrice,
            first_name: personalInfo.fName,
            last_name: personalInfo.lName,
            email: personalInfo.email,
            phone: personalInfo.phone,
        }).then((res) => {
            res && console.log(res.status)
            res && res.status <= 201 ? setOrderCreated(true) : setOrderCreated(false)
        })

        setPersonalInfo({ fName: '', lName: '', email: '', phone: '' })
        setCardInfo({ card: '', ccv: '', cardExpired: '' })
        setOrderCreated(false)
    }

    const personalInputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setPersonalInfo((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const cardInputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setCardInfo((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    useEffect(() => {
        orderCreated && document.body.classList.add('overflow-hidden')
    }, [orderCreated])

    return (
        <section>
            <Title titleText='Checkout' bg={about_4} />
            <div className={`${!orderCreated ? styles.modalHidden : ''}`}>
                <CheckoutModal />
            </div>
            <div className={styles.bookingCont}>
                <form onSubmit={(e) => start && end && orderSubmit(e)} className={styles.services}>
                    <h2 className={styles.subTitle}>Personal Information</h2>

                    <div className={styles.form}>
                        <div className={styles.inputsCont}>
                            <input
                                required
                                className={styles.input}
                                type="text"
                                name='fName'
                                placeholder='First Name'
                                value={personalInfo.fName}
                                onChange={personalInputHandle}
                            />
                            <input
                                required
                                className={styles.input}
                                type="text"
                                name='lName'
                                placeholder='Last Name'
                                value={personalInfo.lName}
                                onChange={personalInputHandle}
                            />
                        </div>
                        <div className={styles.inputsCont}>
                            <input
                                required
                                className={styles.input}
                                type="email"
                                name='email'
                                placeholder='Email'
                                value={personalInfo.email}
                                onChange={personalInputHandle}
                            />
                            <input
                                required
                                className={styles.input}
                                type="tel"
                                name='phone'
                                placeholder='Phone Number'
                                value={personalInfo.phone}
                                onChange={personalInputHandle}
                            />
                        </div>
                    </div>

                    <h2 className={styles.subTitle}>Pay with Card</h2>
                    <div className={styles.form}>
                        <div className={styles.inputsCont}>
                            <input
                                required
                                className={styles.input}
                                type="number"
                                name='card'
                                placeholder='Card Number'
                                value={cardInfo.card}
                                onChange={cardInputHandle}
                            />
                        </div>
                        <div className={styles.inputsCont}>
                            <input
                                required
                                className={styles.input}
                                type="number"
                                name='ccv'
                                placeholder='CCV'
                                value={cardInfo.ccv}
                                onChange={cardInputHandle}
                            />
                            <input
                                required
                                className={styles.input}
                                type="date"
                                name='cardExpired'
                                placeholder='Expiration'
                                value={cardInfo.cardExpired}
                                onChange={cardInputHandle}
                            />
                        </div>
                    </div>

                    <h2 className={styles.subTitle}>Additional Information</h2>
                    <div className={styles.descCont}>
                        <textarea className={styles.textarea} placeholder='Leave a message' ></textarea>
                    </div>
                    <div>
                        <input required type='checkbox' id='termsCheck' />
                        <label htmlFor="termsCheck">
                            I have read and accept
                            <Link to='/terms'>Terms & Conditions</Link>
                        </label>
                    </div>
                    <div className={styles.payBtnCont}>
                        <MyButton width='100%' text='CONFIRM AND PAY' bg='#5B6460' />
                        <span className={`${!start || !end ? styles.btnOff : ''}`}></span>
                    </div>
                </form>

                <div className={styles.priceCardCont}>
                    <h2 className={styles.subTitle}>Total</h2>
                    <div className={styles.priceCard}>
                        <div>
                            <span className={styles.priceDay}>The Glass Hut</span><span> • Vesterborg, Denmark</span>
                        </div>

                        <div className={styles.chooseDate}>
                            <div className={styles.chooseInputCont}>
                                <span>Check in</span>
                                <span>{start && format(start, 'd MMM yyyy')}</span>
                            </div>

                            <div className={styles.line}></div>

                            <div className={styles.chooseInputCont}>
                                <span>Check out</span>
                                <span>{end && format(end, 'd MMM yyyy')}</span>
                            </div>

                            <div className={styles.line}></div>

                            <div className={styles.chooseInputCont}>
                                <span>Guests</span>
                                <span>{guestsNumb}</span>
                            </div>
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
