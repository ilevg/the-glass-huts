import styles from './Title.module.scss'
import MyButton from '../myButton/MyButton';

interface Link {
    text: string;
    url: string;
}
interface TitleProps {
    titleText: string;
    links?: Link[];
    bg: string;
}

const Title = ({ titleText, links, bg }: TitleProps) => {
    return (
        <div
            style={{ backgroundImage: `url(${bg})` }}
            className={styles.heading}
        >
            <div className={styles.filter}></div>
            <h1 className={styles.title}>{titleText}</h1>
            <div className={styles.linksCont}>
                {
                    links && links.map((link, index) =>
                        <MyButton
                            key={index}
                            width='180px'
                            text={link.text}
                            link={link.url}
                            bg={bg}
                        />
                    )
                }
            </div>

        </div >
    )
}

export default Title
