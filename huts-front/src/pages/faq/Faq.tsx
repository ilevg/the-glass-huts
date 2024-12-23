import styles from './Faq.module.scss'
import Title from "../../UI/title/Title"
import about_4 from '../../assets/images/about/about-4.png'
import Dropdown from '../../components/dropdown/Dropdown'
const dropdownData = [
    {
        title: 'Price',
        text: [
            'Prices range from 3,450 to 4,250 DKK for one night’s stay for two people, including breakfast.',
            'Extra beds are unavailable.',
            'Book two or more consecutive nights and get the following discount:',
            '2 nights: 600 DKK',
            '3 nights: 1.000 DKK',
            '4 nights: 1.500 DKK',
            'For more than 4 consecutive nights contact: info@theglasshuts.com'
        ]
    },
    {
        title: 'Booking',
        text: [
            'The Glass Hut can be booked all year round. The Glass Hut is fully insulated and heated, so that you can relax and enjoy your stay even in colder weather.',
            'Check -in: after 14:00.',
            'Check - out: no later than 11:00 on the day of departure.'
        ]
    },
    {
        title: 'Cancellation',
        text: [
            'Cancellation more than 30 days before arrival: 100% refund',
            'Cancellation between 30 and 15 days before arrival: 50% refund',
            'Cancellation less than 15 days before arrival: No refund'
        ]
    },
    {
        title: 'Outdoor Hot Tub',
        text: [
            'The hot tub is emptied and cleaned every day. Upon arrival, it will be filled with water and set to heat.',
            'The hot tub is electronically heated and can be used year-round.',
            'Remember to bring a pair of beach sandals / flip flops to use when going to and from the outdoor hot tub.'
        ]
    },
    {
        title: 'Dining',
        text: [
            'Prices range from 3,450 to 4,250 DKK for one night’s stay for two people, including breakfast.',
            'Extra beds are unavailable.',
            'Book two or more consecutive nights and get the following discount:',
            '2 nights: 600 DKK',
            '3 nights: 1.000 DKK',
            '4 nights: 1.500 DKK',
            'For more than 4 consecutive nights contact: info@theglasshuts.com'
        ]
    },
    {
        title: 'Special Dietary Requirements',
        text: [
            'The Glass Hut can be booked all year round. The Glass Hut is fully insulated and heated, so that you can relax and enjoy your stay even in colder weather.',
            'Check -in: after 14:00.',
            'Check - out: no later than 11:00 on the day of departure.'
        ]
    },
    {
        title: 'Facilities',
        text: [
            'Cancellation more than 30 days before arrival: 100% refund',
            'Cancellation between 30 and 15 days before arrival: 50% refund',
            'Cancellation less than 15 days before arrival: No refund'
        ]
    },
    {
        title: 'Parking',
        text: [
            'The hot tub is emptied and cleaned every day. Upon arrival, it will be filled with water and set to heat.',
            'The hot tub is electronically heated and can be used year-round.',
            'Remember to bring a pair of beach sandals / flip flops to use when going to and from the outdoor hot tub.'
        ]
    },
    {
        title: 'Guaranteed Starry View',
        text: [
            'Prices range from 3,450 to 4,250 DKK for one night’s stay for two people, including breakfast.',
            'Extra beds are unavailable.',
            'Book two or more consecutive nights and get the following discount:',
            '2 nights: 600 DKK',
            '3 nights: 1.000 DKK',
            '4 nights: 1.500 DKK',
            'For more than 4 consecutive nights contact: info@theglasshuts.com'
        ]
    },
    {
        title: 'Neighbours',
        text: [
            'The Glass Hut can be booked all year round. The Glass Hut is fully insulated and heated, so that you can relax and enjoy your stay even in colder weather.',
            'Check -in: after 14:00.',
            'Check - out: no later than 11:00 on the day of departure.'
        ]
    },
    {
        title: 'Breakages and Damages',
        text: [
            'Cancellation more than 30 days before arrival: 100% refund',
            'Cancellation between 30 and 15 days before arrival: 50% refund',
            'Cancellation less than 15 days before arrival: No refund'
        ]
    },
    {
        title: 'Smoking',
        text: [
            'The hot tub is emptied and cleaned every day. Upon arrival, it will be filled with water and set to heat.',
            'The hot tub is electronically heated and can be used year-round.',
            'Remember to bring a pair of beach sandals / flip flops to use when going to and from the outdoor hot tub.'
        ]
    },
    {
        title: 'Pets',
        text: [
            'Prices range from 3,450 to 4,250 DKK for one night’s stay for two people, including breakfast.',
            'Extra beds are unavailable.',
            'Book two or more consecutive nights and get the following discount:',
            '2 nights: 600 DKK',
            '3 nights: 1.000 DKK',
            '4 nights: 1.500 DKK',
            'For more than 4 consecutive nights contact: info@theglasshuts.com'
        ]
    },
    {
        title: 'Cleaning',
        text: [
            'The Glass Hut can be booked all year round. The Glass Hut is fully insulated and heated, so that you can relax and enjoy your stay even in colder weather.',
            'Check -in: after 14:00.',
            'Check - out: no later than 11:00 on the day of departure.'
        ]
    },
    {
        title: 'Outdoor Hot Tub',
        text: [
            'Cancellation more than 30 days before arrival: 100% refund',
            'Cancellation between 30 and 15 days before arrival: 50% refund',
            'Cancellation less than 15 days before arrival: No refund'
        ]
    },
]

const Faq = () => {

    return (
        <section >
            <Title titleText='FAQ' bg={about_4} />
            <div className={styles.faq}>
                <Dropdown data={dropdownData} />
            </div>
        </section>
    )
}

export default Faq
