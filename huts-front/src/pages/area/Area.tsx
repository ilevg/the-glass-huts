import styles from './Area.module.scss'
import Title from "../../UI/title/Title"
import InfoItem from "../../components/infoItem/InfoItem"
import { infoSections } from './data'
import { useState } from 'react'

const Area = () => {
    const [mapFilter, setMapFilter] = useState(true)

    const titleLinks = [
        {
            text: 'Get Direction',
            url: 'https://maps.app.goo.gl/pHfYX5vPgd2EJjH7A'
        }
    ]

    const mapFilterOff = () => {
        setMapFilter(!mapFilter)
    }
    return (
        <section>
            <Title titleText='The Area' bg={infoSections[0].imgArr[2]} links={titleLinks} />
            <div className={styles.area}>
                {
                    infoSections.map((v, i) => (
                        <InfoItem key={i} title={v.title} text={v.text} imgArr={v.imgArr} infoFirst={i % 2 === 0 ? false : true} />
                    ))
                }
            </div>
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
        </section>

    )
}

export default Area
