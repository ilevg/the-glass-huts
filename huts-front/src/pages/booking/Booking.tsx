import { useEffect, useState } from 'react'
import { format, differenceInDays, eachDayOfInterval } from "date-fns"

import styles from './Booking.module.scss'

import Title from "../../UI/title/Title"
import Dropdown from '../../components/dropdown/Dropdown'
import MyButton from '../../UI/myButton/MyButton'
import Calendar from '../../components/calendar/Calendar'

import { dropdownData } from './data'
import about_4 from '../../assets/images/about/about-4.png'
import { useBookingContext } from '../../context'
import { fetchDates } from '../../services/apiService'



const Booking = () => {
    const { setBookingData } = useBookingContext()

    const [checkIn, setCheckIn] = useState<Date | null>(null)
    const [checkOut, setCheckOut] = useState<Date | null>(null)
    const [guests, setGuests] = useState<number>(1)
    const [bokedDates, setBokedDates] = useState<Date[]>([new Date])
    const [calVisible, setCalVisible] = useState<boolean>(false)
    const [optionsExtra, setOptionsExtra] = useState<{ id?: number; title: string; desc?: string; text: string[] }[]>([]);

    useEffect(() => {
        const fetchAndSetDates = async () => {
            const dates = await fetchDates();
            const res = dates.flatMap((date: { check_in: Date; check_out: Date }) =>
                eachDayOfInterval({
                    start: new Date(date.check_in),
                    end: new Date(date.check_out),
                })
            );
            setBokedDates(res);
        };

        fetchAndSetDates();
    }, [checkIn, setCheckOut]);

    const daysBetween = checkIn && checkOut ? differenceInDays(checkOut, checkIn) + 1 : 0

    const priceNigts = 3200 * daysBetween + (guests * 200)
    const priceExtraOptions = optionsExtra.reduce((acc, v) => {
        if (v && v.desc) {
            acc += parseInt(v.desc)
        }
        return acc
    }, 0)
    const total = priceNigts + priceExtraOptions

    const addItem = (item: { id?: number, title: string; desc?: string; text: string[] }) => {
        setOptionsExtra((prev) => {
            if (!prev.includes(item)) {
                return [...prev, item];
            } else if (prev.includes(item)) {
                return [...prev].filter((v) => v !== item)
            }
            return [...prev]
        })
    };

    useEffect(() => {
        setBookingData && setBookingData({
            start: checkIn,
            end: checkOut,
            guestsNumb: guests,
            priceWithoutOptions: priceNigts,
            totalPrice: total,
            options: optionsExtra,
            days: daysBetween
        });
    }, [checkIn, checkOut, guests, optionsExtra, priceNigts, total, daysBetween])

    return (
        <section className={styles.booking}>
            <Title titleText='Booking' bg={about_4} />
            <div className={styles.bookingCont}>
                <div className={styles.services}>
                    <h2 className={styles.subTitle}>Choose Additional Services</h2>
                    <Dropdown addBtn={true} data={dropdownData} optionsExtra={optionsExtra} onClick={addItem} />

                    <h2 className={styles.subTitle}>Hut rules</h2>
                    <div className={styles.descCont}>
                        <span>Check-in:  2:00 PM - 11:00 PM</span>
                        <span>Checkout: 11:00 AM</span>
                        <span>Not suitable for children and infants</span>
                        <span>No smoking</span>
                        <span>No pets</span>
                    </div>

                    <h2 className={styles.subTitle}>Important Information</h2>
                    <div className={styles.descCont}>
                        <span>You need to hike a steep hill to arrive at the treehouses, it takes approx 20-30 minutes on a trail with stairs and uneven ground.</span>
                    </div>

                    <MyButton width='100%' text='FAQ' bg='#5B6460' link='/faq' />
                </div>
                <div className={styles.priceCardCont}>
                    <h2 className={styles.subTitle}>Total</h2>
                    <div className={styles.priceCard}>
                        <div>
                            <span className={styles.priceDay}>3.200kr</span><span> / night</span>
                        </div>

                        <form className={styles.chooseDate}>
                            <div className={styles.chooseInputCont}>
                                <span>Check in</span>
                                {
                                    <span
                                        className={styles.date}
                                        onClick={() => setCalVisible(!calVisible)}
                                    >
                                        {checkIn ? format(checkIn, 'd MMM yyyy') : 'Add dates'}
                                    </span>
                                }
                            </div>

                            <div className={styles.line}></div>

                            <div className={styles.chooseInputCont}>
                                <span>Check out</span>
                                {
                                    <span
                                        className={styles.date}
                                        onClick={() => setCalVisible(!calVisible)}
                                    >
                                        {checkOut ? format(checkOut, 'd MMM yyyy') : 'Add dates'}
                                    </span>
                                }
                            </div>

                            <div className={styles.line}></div>

                            <div className={styles.chooseInputCont}>
                                <span>Guests</span>
                                <input
                                    className={styles.chooseInput}
                                    type='number'
                                    name="number"
                                    id="number"
                                    value={guests}
                                    onChange={(e) => setGuests(Number(e.target.value))}
                                    min={1}
                                    max={8}
                                />
                            </div>
                            {
                                calVisible && <div className={styles.calendarCont}>
                                    <Calendar
                                        bokedDates={bokedDates}
                                        setCheckIn={(date) => setCheckIn(date)}
                                        setCheckOut={(date) => setCheckOut(date)}
                                        calVisible
                                        setCalVisible={(calVisible) => setCalVisible(!calVisible)}
                                    />
                                </div>
                            }
                        </form>

                        <form className={styles.couponCont}>
                            <input className={styles.couponInput} type="text" placeholder='Coupon Code' />
                            <MyButton width='100px' text='APPLY' bg='rgb(91, 100, 96)' />
                        </form>

                        <div className={styles.priceCont}>
                            <span>3.200kr x {daysBetween} nights</span>
                            {
                                daysBetween > 0 ? <span>{priceNigts}kr</span> : '0kr'
                            }

                        </div>
                        {
                            optionsExtra.length > 0 && optionsExtra.map((option) => (
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
                            {
                                checkIn && checkOut ? <span>{total}kr</span> : '0kr'
                            }
                        </div>
                        <div className={styles.btnCont}>
                            <MyButton width='100%' text='BOOK' bg='rgb(91, 100, 96)' link={checkIn && checkOut ? '/checkout' : ''} />
                            <span className={`${!checkIn || !checkOut ? styles.btnOff : ''}`}></span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Booking
