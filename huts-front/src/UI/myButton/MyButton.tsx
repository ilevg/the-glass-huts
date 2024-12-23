import { Link } from 'react-router-dom';
import styles from './MyButton.module.scss'
interface BtnProps {
    width: string;
    text: string;
    bg: string;
    link?: string;
    onClick?: () => void;
}

const MyButton = ({ width, text, bg, link, onClick }: BtnProps) => {

    const btnStyle = { width: `${width}`, background: bg }
    return (
        <>
            {
                link
                    ? <Link onClick={() => onClick && onClick()} className={styles.btn} to={link} style={btnStyle}>{text}</Link>
                    : <button onClick={() => onClick && onClick()} className={styles.btn} style={btnStyle}>{text}</button>
            }
        </>
    )
}

export default MyButton
