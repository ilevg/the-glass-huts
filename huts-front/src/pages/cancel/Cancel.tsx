import styles from './Cancel.module.scss'

const Cancel = () => {
    return (
        <section className={styles.cancelSection}>
            <div className={styles.cancel}>
                <h1 className={styles.title}>Cancellation Policy</h1>
                <p>
                    Stays at The Glass Huts can be refunded and rebooked up to 15 days before arrival by contacting us at:
                    <a href="mailto:info@glashytterne.dk">info@glashytterne.dk</a>.
                </p>

                <h2 className={styles.subTitle}>Refund Terms</h2>
                <ul>
                    <li><strong>Cancellation more than 30 days before arrival:</strong> 100% refund</li>
                    <li><strong>Cancellation between 30 and 15 days before arrival:</strong> 50% refund</li>
                    <li><strong>Cancellation less than 15 days before arrival:</strong> No refund</li>
                </ul>
                <p>
                    A processing fee of <strong>DKK 200</strong> will be deducted from full refunds. This covers fees charged by our payment provider and administration. Refunds will always be returned via the original payment method. Transfers to other accounts or credit cards are not permitted for security reasons. Refund processing may take approximately <strong>5 working days</strong>.
                </p>
                <p>
                    <strong>No refunds</strong> will be given for “no shows.” This includes reasons such as illness, accidents, family bereavements, traffic conditions, weather conditions, or any other issues preventing your arrival on the check-in day. Similarly, no refunds will be issued for early departure under the same conditions.
                </p>

                <h2 className={styles.subTitle}>Rebooking Terms</h2>
                <ul>
                    <li><strong>Rebooking more than 30 days before arrival:</strong> No charge</li>
                    <li><strong>Rebooking between 30 and 15 days before arrival:</strong> DKK 800</li>
                    <li><strong>Rebooking between 14 and 8 days before arrival:</strong> DKK 1500</li>
                    <li><strong>Rebooking less than 8 days before arrival:</strong> No rebooking allowed</li>
                </ul>
                <p>
                    Upon rebooking, you will receive a voucher code for the amount paid, minus the rebooking fee. The voucher for a new booking is valid for <strong>12 months</strong>.
                </p>
                <p>
                    If The Glass Huts have incurred specific expenses related to your reservation, you are obligated to cover such costs.
                    We recommend checking with your insurance company to see if costs associated with cancellation or rebooking are covered.
                </p>

                <h2 className={styles.subTitle}>Cancellation by The Glass Huts</h2>
                <p>
                    On very rare occasions, The Glass Huts may need to cancel your reservation. In such cases:
                </p>
                <ul>
                    <li>You will receive a <strong>full refund</strong>.</li>
                    <li>The Glass Huts have no further responsibility towards you as a result of the cancellation.</li>
                    <li>The Glass Huts will endeavour to move a confirmed booking to another date within the same season/price range.</li>
                </ul>

                <h2 className={styles.subTitle}>Policy Updates</h2>
                <p>
                    The Glass Huts reserve the right to update or change these cancellation and rebooking policies without notice.
                </p>
            </div>
        </section>
    )
}

export default Cancel
