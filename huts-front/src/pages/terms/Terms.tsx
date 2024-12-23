import styles from './Terms.module.scss'

const Terms = () => {
    return (
        <section className={styles.termsSection}>
            <div className={styles.terms}>
                <h1 className={styles.title}>Terms and Conditions</h1>
                <div>
                    <p>
                        The website <a href="https://www.glashytterne.dk" target="_blank" rel="noopener noreferrer">www.glashytterne.dk</a> and The Glass Huts are owned and operated by KUDU CVR no.: <strong>DK42304050</strong>.
                    </p>
                    <p>
                        Contact us if you have questions about our website, products, and terms of trade:
                    </p>
                </div>

                <address>
                    <strong>KUDU</strong><br />
                    Mothsvej 58A<br />
                    DK-2840 Holte<br />
                    CVR no.: DK42304050<br />
                    <a href="mailto:info@glashytterne.dk">info@glashytterne.dk</a><br />
                    Phone: +45 5012 5014
                </address>

                <p>
                    These Terms and Conditions apply to the purchase of products (stays and gift cards) at <a href="https://www.glashytterne.dk" target="_blank" rel="noopener noreferrer">www.glashytterne.dk</a>.
                    The right to withdrawal only applies to private consumers who shop via this website.
                </p>

                <h2 className={styles.subTitle}>Payment Information:</h2>
                <ul>
                    <li><strong>Bank:</strong> Spar Nord</li>
                    <li><strong>Reg.nr.:</strong> 9035</li>
                    <li><strong>Account no.:</strong> 1980080389</li>
                    <li><strong>IBAN:</strong> DK2990351980080389</li>
                    <li><strong>SWIFT:</strong> SPNODK22</li>
                    <li><strong>MobilePay:</strong> +45 5012 5014</li>
                </ul>

                <h2 className={styles.subTitle}>Booking and Confirmation</h2>
                <p>
                    Every booking must be paid in full immediately at the time of booking or as stated on the invoice. A booking confirmation will be sent via the provided email. If you do not receive it, notify us at <a href="mailto:info@glashytterne.dk">info@glashytterne.dk</a>.
                </p>

                <h2 className={styles.subTitle}>Payment and Delivery</h2>
                <p>
                    Payment is accepted via Visa/Dankort, MasterCard, and MobilePay. <strong>QuickPay A/S</strong> handles all transactions, and their terms apply. Bookings are accepted only from individuals over <strong>18 years of age</strong>.
                </p>

                <h2 className={styles.subTitle}>Prices</h2>
                <p>
                    Prices are listed in Danish kroner (DKK). The Glass Huts reserves the right to adjust prices. The price on the booking confirmation is binding.
                </p>

                <h2 className={styles.subTitle}>Gift Cards</h2>
                <ul>
                    <li>Gift cards expire after <strong>12 months</strong>.</li>
                    <li>A refund is subject to a processing fee of 10% of the value (max <strong>DKK 200</strong>).</li>
                    <li>Refunds are issued to the original payment method.</li>
                </ul>

                <h2 className={styles.subTitle}>Guest Conduct</h2>
                <div>
                    <p>
                        Guests must behave appropriately, respecting the facilities and surroundings. Failure to comply may result in immediate termination of the stay with no refund. Damage caused will be charged immediately.
                    </p>
                    <p><strong>Smoking</strong> and <strong>pets</strong> are strictly prohibited. A violation will incur a cleaning fee of <strong>DKK 3,000</strong>.</p>
                </div>


                <h2 className={styles.subTitle}>Liability</h2>
                <p>
                    Guests stay at their own risk. The Glass Huts assumes no responsibility for theft, loss, or damage. Report defective equipment immediately.
                </p>

                <h2 className={styles.subTitle}>Legislation and Jurisdiction</h2>
                <p>Disputes are governed by <strong>Danish law</strong> and resolved in Danish courts.</p>

                <h2 className={styles.subTitle}>Force Majeure</h2>
                <p>
                    The Glass Huts reserves the right to invoke force majeure in events like war, natural disasters, pandemics, etc. Refunds are not available under such circumstances, but rebooking will be offered.
                </p>

                <h2 className={styles.subTitle}>Complaints</h2>
                <p>
                    Complaints must be submitted during your stay or within <strong>7 days</strong> after departure to <a href="mailto:info@glashytterne.dk">info@glashytterne.dk</a>.
                </p>
            </div>

        </section>
    )
}

export default Terms
