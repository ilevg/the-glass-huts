import axios from 'axios'

interface PostOrderData {
    check_in: Date | null
    check_out: Date | null
    guests: number
    options: string
    total: number
    first_name: string
    last_name: string
    email: string
    phone: string
}

export const fetchDates = async () => {
    try {
        const { data } = await axios.get(`https://the-glass-huts-back.vercel.app/api/dates`)
        return data
    } catch (error) {
        console.error('Error fetching dates', error)
        return null
    }
}

export const postOrder = async (orderData: PostOrderData) => {
    try {
        const response = await axios.post(
            `https://the-glass-huts-back.vercel.app/api/dates`,
            orderData,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        return response
    } catch (error) {
        console.error('Error fetching dates', error)
        return null
    }
}