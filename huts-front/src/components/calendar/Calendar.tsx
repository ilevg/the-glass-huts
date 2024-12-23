import { useState } from 'react'
import { format, addMonths, addDays, startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek, getDay, isSameDay, isBefore, isAfter } from "date-fns"
import styles from './Calendar.module.scss'

interface CalendarProps {
    bokedDates: Date[]
    setCheckIn: (date: Date | null) => void
    setCheckOut: (date: Date | null) => void
    setCalVisible: (calVisible: boolean) => void
    calVisible: boolean
}

const Calendar = ({ bokedDates, setCheckIn, setCheckOut, calVisible, setCalVisible }: CalendarProps) => {

    const [carrentMonth, setCarrentMonth] = useState<Date>(new Date())
    const [startDay, setStartDay] = useState<Date | null>(null)
    const [endDay, setEndDay] = useState<Date | null>(null)

    const currDate = new Date()
    const startOfCurrMonth = startOfMonth(carrentMonth)
    const endOfCurrMonth = endOfMonth(carrentMonth)

    const daysInMonth = eachDayOfInterval({
        start: startOfCurrMonth,
        end: endOfCurrMonth
    })

    const daysOfWeek = eachDayOfInterval({
        start: startOfWeek(currDate),
        end: endOfWeek(currDate)
    })

    const paddedDays = [
        ...Array(getDay(startOfCurrMonth)).fill(null),
        ...daysInMonth
    ]

    const isBooked = (date: Date) => bokedDates.some((booked) => isSameDay(booked, date))

    const handleClickDay = (date: Date) => {
        if (!startDay || (startDay && endDay)) {
            setStartDay(date)
            setEndDay(null)
        } else if (isBefore(date, startDay)) setStartDay(date)
        else setEndDay(date)
    }

    const isInRange = (date: Date) => {
        if (!startDay || !endDay) return false;
        const start = addDays(startDay, -1)
        const end = addDays(endDay, 1)

        return isAfter(date, start) && isBefore(date, end);
    };


    const renderDay = (date: Date | null, index: number) => {
        if (!date) {
            return <div key={index}></div>;
        }

        const isSelectedStart = startDay && date && isSameDay(date, startDay) ? styles.startDay : '';
        const isSelectedEnd = endDay && date && isSameDay(date, endDay) ? styles.endDay : '';
        const isRange = date && isInRange(date) ? styles.rangeDays : '';
        const isBeforeNow = date && isBefore(date, currDate) ? styles.booked : '';
        const isDisabled = date && isBooked(date) ? styles.booked : '';
        return (
            <button
                key={date.toISOString()}
                type="button"
                className={`${styles.dayBtn} ${isSelectedStart} ${isSelectedEnd} ${isRange} ${isDisabled} ${isBeforeNow}`}
                onClick={() => !isDisabled && !isBeforeNow && handleClickDay(date)}
            >
                {format(date, 'd')}
            </button>
        );
    };

    const handleMonth = (n: number) => setCarrentMonth(addMonths(carrentMonth, n))

    return (
        <div className={styles.calendarCont}>
            <div className={styles.dateCont}>
                <button type="button" onClick={() => handleMonth(-1)}>&lt;</button>
                <span>
                    {format(carrentMonth, 'MMMM yyyy')}
                </span>
                <button type="button" onClick={() => handleMonth(1)}>&gt;</button>
            </div>
            <div className={styles.calendar}>
                {
                    daysOfWeek.map((day) => (
                        <span className={styles.weekDays} key={day.toISOString()}>{format(day, 'EEEEEE')}</span>
                    ))
                }
                {
                    paddedDays.map((date, index) => (
                        renderDay(date, index)
                    ))
                }
            </div>

            <div className={styles.btnCont}>
                <button
                    onClick={() => setCalVisible(calVisible)}
                    className={styles.btnClear}
                    type="button"
                >Close</button>

                <button
                    onClick={() => {
                        if (startDay && endDay) {
                            setCheckIn(startDay)
                            setCheckOut(endDay)
                            setCalVisible(calVisible)
                        }
                    }}
                    className={styles.btnChoose}
                    type="button"
                >Choose</button>
            </div>
        </div>
    )
}

export default Calendar
