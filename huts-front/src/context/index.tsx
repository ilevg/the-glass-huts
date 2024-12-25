import { createContext, useState, ReactNode, useContext } from "react"
import { BookingDataProps } from "../types";


interface BookingProviderProps {
    children: ReactNode
}
export const BookingContext = createContext<BookingDataProps | null>(null);

export const BookingProvider = ({ children }: BookingProviderProps) => {
    const [bookingData, setBookingData] = useState<BookingDataProps>({
        start: null,
        end: null,
        guestsNumb: 1,
        priceWithoutOptions: 0,
        totalPrice: 0,
        days: 0,
        options: [],
        setBookingData: () => { },
    })

    const updateBookingData = (data: Partial<BookingDataProps>) => {
        setBookingData((prev) => ({ ...prev, ...data }))
    }

    return (
        <BookingContext.Provider value={{ ...bookingData, setBookingData: updateBookingData }}>
            {children}
        </BookingContext.Provider>
    )
}

export const useBookingContext = () => {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error('useBookingContext must be used within a BookingProvider');
    }
    return context;
};