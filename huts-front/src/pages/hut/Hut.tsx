import styles from './Hut.module.scss'
import Title from "../../UI/title/Title"
import InfoItem from "../../components/infoItem/InfoItem"
import { infoSections } from './data'

const Hut = () => {

    return (
        <section>
            <Title titleText='The Hut' bg={infoSections[0].imgArr[0]} />
            <div className={styles.hut}>
                {
                    infoSections.map((v, i) => (
                        <InfoItem key={i} title={v.title} text={v.text} imgArr={v.imgArr} infoFirst={i % 2 === 0 ? true : false} />
                    ))
                }
            </div>
        </section>
    )
}

export default Hut
