import Slider from "../../components/slider/Slider"
import styles from './Main.module.scss'
import sliderImgF from '../../assets/images/main/banner-first.png'
import sliderImgS from '../../assets/images/main/banner-sec.png'
import BookCard from "./components/bookCard/BookCard"
import { Link } from "react-router-dom"

import cabinsImgF from '../../assets/images/main/slider/DJIo2.jpg'
import cabinsImgS from '../../assets/images/main/slider/DJIo3.jpg'
import cabinsImgT from '../../assets/images/main/slider/DJIo4.jpg'

import cabinsImgFifth from '../../assets/images/main/cabins-sec.png'
import cabinsImgSix from '../../assets/images/main/cabins-third.png'
import cabinsImgSeven from '../../assets/images/main/cabins-forth.png'

import facilSvg from '../../assets/svg/Group 47.svg'

import aboutImg from '../../assets/images/main/about.png'
import aboutImgSec from '../../assets/images/main/about-sec.png'

import twitter from '../../assets/images/tw.png'
import inst from '../../assets/images/inst.png'
import fb from '../../assets/images/fb.png'

import book from '../../assets/images/main/book.png'
import { useState } from "react"



const Main = () => {
    const cabinsImgArr = [cabinsImgF, cabinsImgS, cabinsImgT]
    const banerImgArr = [sliderImgF, sliderImgS, sliderImgF, sliderImgS]

    const [mapFilter, setMapFilter] = useState(true)

    const mapFilterOff = () => {
        setMapFilter(!mapFilter)
    }
    return (
        <div>
            <div className={styles.banner}>
                <div className={styles.bannerText}>
                    <h1 className={styles.bannerTitle}>Find peace in the Forest</h1>
                    <p className={styles.bannerDesc}>Come and stay in out hut hotel near Mariager Fjord in Denmark</p>
                </div>
                <Slider width="100%" height="860px" imgArr={banerImgArr} />
                <div className={styles.bookCardCont}>
                    <BookCard />
                </div>
            </div>

            <div className={styles.cabins}>
                <div className={styles.cabinsCont}>
                    <div className={styles.cabinsDescCont}>
                        <h2 className={styles.cabinsTitle}>The Cabins</h2>
                        <p className={styles.cabinsDesc}>Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.</p>
                        <Link to='about'>Read More</Link>
                    </div>
                    <div className={styles.sliderCont}>
                        <Slider width="100%" height="450px" imgArr={cabinsImgArr} />
                    </div>
                </div>

                <div className={styles.cabinsImgs}>
                    <img className={styles.cabinsImg} src={cabinsImgFifth} alt="cabin" />
                    <img className={styles.cabinsImg} src={cabinsImgSix} alt="cabin" />
                    <img className={styles.cabinsImg} src={cabinsImgSeven} alt="cabin" />
                </div>
            </div>

            <div className={styles.mapCont}>
                <div className={styles.map}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d455.4244362301345!2d11.297005791569825!3d54.88194398197666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ad55ac3e531b3d%3A0xddb0c906311c026e!2sGlashytterne%20%2F%20The%20Glass%20Huts!5e0!3m2!1sru!2spl!4v1733145607373!5m2!1sru!2spl"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    <span className={`${styles.mapFilter} ${!mapFilter ? styles.mapFilterOff : ''} `}>
                        <span className={styles.mapBtnCont}>
                            <span className={styles.mapBtnContSec}>
                                <button onClick={mapFilterOff} className={styles.mapBtn}>WE ARE<br />HERE</button>
                            </span>
                        </span>
                    </span>
                </div>


                <div className={styles.mapDescCont}>
                    <h2 className={styles.mapTitle}>The Forest</h2>
                    <p className={styles.mapDesc}>Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.</p>
                    <Link to='about'>Read More</Link>
                </div>
            </div>
            <section className={styles.fasilities__section}>
                <div className={styles.fasilities__items}>
                    <h2 className={styles.fasilities__header}>Facilities</h2>
                    <img className={styles.img} src={facilSvg} alt="faciliteter" />
                </div>
                <div className="facilities__items_second">

                </div>
            </section>

            <section className={styles.about}>
                <img className={styles.aboutImg} src={aboutImgSec} alt="cabin" />
                <img className={styles.aboutImg} src={aboutImg} alt="cabin" />
                <Link to='/about' className={styles.aboutBtn}>More About Us</Link>
            </section>

            <section className={styles.contact}>
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
                    <img className={styles.imgBook} src={book} alt="facebook" width={360} height={170} />
                    <BookCard />
                </div>
            </section>
        </div>
    )
}

export default Main
