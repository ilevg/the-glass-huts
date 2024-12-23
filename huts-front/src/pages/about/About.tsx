import styles from './About.module.scss'
import Title from "../../UI/title/Title"
import InfoItem from "../../components/infoItem/InfoItem"
import outImg3 from '../../assets/images/hut/outside-3.jpeg'

import about_1 from '../../assets/images/about/about-1.png'
import about_2 from '../../assets/images/about/about-2.png'
import about_3 from '../../assets/images/about/about-3.png'
import about_4 from '../../assets/images/about/about-4.png'
import about_5 from '../../assets/images/about/about-5.png'

import twitter from '../../assets/images/tw.png'
import inst from '../../assets/images/inst.png'
import fb from '../../assets/images/fb.png'

const About = () => {
    const infoSections = [{
        title: 'Who Are We?',
        text: 'When opposites attract, something magical happens and anything seems possible. This is how we began. Michael is a do-it - yourself entrepreneurial type, with a penchant for gadgets and tech, who is constantly coming up with new ideas. Hoa is a free spirit who loves delicious food, is quality- conscious and is a detail - oriented perfectionist. Together, we created Denmarks first ever Glass Hut.Our contrasting personalities and skills united for the project, which now sits on our beautiful plot of land in the Lolland Alps.',
        imgArr: outImg3
    }]

    return (
        <section className={styles.aboutSec}>
            <Title titleText='About' bg={outImg3} />
            <div className={styles.about}>
                {
                    infoSections.map((v, i) => (
                        <InfoItem key={i} title={v.title} text={v.text} imgArr={v.imgArr} infoFirst={i % 2 === 0 ? false : true} />
                    ))
                }
            </div>

            <h2 className={styles.aboutTitle}> It is our personal vision of a modern adventure getaway.</h2>

            <div className={styles.imgs}>
                <div className={`${styles.imgCont} ${styles.imgContFirst}`}>
                    <img className={styles.img} src={about_1} alt="hut-image" />
                    <img className={`${styles.img} ${styles.imgBig}`} src={about_4} alt="hut-image" />
                </div>
                <div className={styles.imgCont}>
                    <img className={styles.img} src={about_3} alt="hut-image" />
                    <div className={styles.imgText}>
                        <span className={styles.text}>We look forward to welcoming you to The Glass Hut and strive to give you an incredible Lolland experience.</span>
                    </div>
                    <img className={styles.img} src={about_1} alt="hut-image" />
                </div>
            </div>


            <div className={styles.contact}>
                <div className={styles.contactCont}>
                    <h3 className={styles.contactTitle}>Stay in touch with us</h3>
                    <a href="https://maps.app.goo.gl/KSqwi7yepe8A36S19" className={styles.contactLink}> Vesterborg, Denmark</a>
                    <a href="tel:+4334334327" className={styles.contactLink}>+433 433 43 27</a>
                    <a href="mailto:info@theglasshuts.com" className={styles.contactLink}>info@theglasshuts.com</a>

                    <div className={styles.contactSocial}>
                        <a href='https://x.com/'>
                            <img className={styles.contactSocialImg} src={twitter} alt="twitter" width={50} height={50} />
                        </a>
                        <a href='https://www.instagram.com/'>
                            <img className={styles.contactSocialImg} src={inst} alt="instagram" width={50} height={50} />
                        </a>
                        <a href='https://www.facebook.com/'>
                            <img className={styles.contactSocialImg} src={fb} alt="facebook" width={50} height={50} />
                        </a>
                    </div>
                </div>

                <div>
                    <img className={styles.contactImg} src={about_5} alt="Hut" />
                </div>
            </div>
        </section>
    )
}

export default About
