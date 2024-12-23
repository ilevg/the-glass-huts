import styles from './Privacy.module.scss'

const Privacy = () => {
    return (
        <section className={styles.privacySection}>
            <div className={styles.privacy}>
                <h1 className={styles.title}>Privacy Policy</h1>

                <div>

                </div>
                <p>
                    KUDU understands the importance of upholding your privacy and safeguarding your personal data. We are committed to ensuring your privacy and will never sell your personal information to a third party. This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from <a href="https://www.glashytterne.dk" target="_blank">www.glashytterne.dk</a>.
                </p>
                <p>
                    We comply with the Data Protection Act 1998, General Data Protection Regulations 2018, and other relevant legislation. For any questions, please contact us at <a href="mailto:info@glashytterne.dk">info@glashytterne.dk</a>.
                </p>

                <h2 className={styles.subTitle}>Personal Information We Collect</h2>
                <ul>
                    <li>
                        <strong>Device Information:</strong> Includes web browser, IP address, time zone, and cookies.
                    </li>
                    <li>
                        <strong>Order Information:</strong> Includes name, billing/shipping address, payment information, email, and phone number.
                    </li>
                </ul>
                <p>
                    Technologies used for data collection include:
                    <ul>
                        <li><strong>Cookies:</strong> Data files with an anonymous unique identifier. Learn more at <a href="http://www.allaboutcookies.org" target="_blank">All About Cookies</a>.</li>
                        <li><strong>Log files:</strong> Track actions like IP address, browser type, and date/time stamps.</li>
                        <li><strong>Web beacons, tags, and pixels:</strong> Record information about site browsing behavior.</li>
                    </ul>
                </p>

                <h2 className={styles.subTitle}>How We Use Your Data</h2>
                <p>
                    We use personal information to:
                    <ul>
                        <li>Provide requested services or products.</li>
                        <li>Send updates about products/services (with your permission).</li>
                        <li>Power site analytics and track browsing behaviors.</li>
                    </ul>
                    We share this information with WordPress for site traffic analysis.
                </p>

                <h2 className={styles.subTitle}>Cookie Policy</h2>
                <p>
                    Cookies are small data files stored on your device. This website uses cookies for secure functionality and analytics. You can reset your browser to refuse cookies or notify you when cookies are sent. Learn more at <a href="http://www.allaboutcookies.org" target="_blank">All About Cookies</a>.
                </p>

                <h2 className={styles.subTitle}>Disclosure of Your Information</h2>
                <p>
                    Your information is either emailed directly to us or securely stored on WordPress servers. We do not share or sell your personal information with other organizations for their own use.
                </p>

                <h2 className={styles.subTitle}>Access to Your Information and Opting Out</h2>
                <p>
                    European residents have the right to:
                    <ul>
                        <li>Request a copy of personal information we hold.</li>
                        <li>Correct inaccuracies in their data.</li>
                        <li>Request deletion of their records.</li>
                    </ul>
                    To exercise these rights, contact us at <a href="mailto:info@glashytterne.dk">info@glashytterne.dk</a>.
                </p>

                <h2 className={styles.subTitle}>Data Retention</h2>
                <p>
                    Order information is retained for records unless requested to be deleted.
                </p>

                <h2 className={styles.subTitle}>External Links</h2>
                <p>
                    Our website contains links to other websites. While we aim to link trusted sources, we are not responsible for their privacy practices. Please review their privacy policies.
                </p>

                <h2 className={styles.subTitle}>Changes to Our Privacy Policy</h2>
                <p>
                    Updates to this policy will be posted on this page. Where appropriate, we may notify you via email. Check this page frequently for updates.
                </p>

                <h2 className={styles.subTitle}>Contact Details</h2>
                <p>
                    For questions about this policy or to object to data processing, contact:
                    <ul>
                        <li><strong>KUDU</strong></li>
                        <li>Mothsvej 58A, DK-2840 Holte</li>
                        <li>Email: <a href="mailto:info@glashytterne.dk">info@glashytterne.dk</a></li>
                        <li>Phone: <a href="tel:+4550125014">+45 5012 5014</a></li>
                    </ul>
                </p>
            </div>
        </section>
    )
}

export default Privacy
