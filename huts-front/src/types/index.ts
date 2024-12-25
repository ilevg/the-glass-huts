export interface BookingDataProps {
    start: Date | null
    end: Date | null
    guestsNumb: number
    priceWithoutOptions: number
    totalPrice: number
    days: number
    options: { title: string; desc?: string; text: string[] }[]
    setBookingData: (data: Partial<BookingDataProps>) => void
}