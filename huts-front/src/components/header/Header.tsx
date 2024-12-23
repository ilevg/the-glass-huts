import { Link } from 'react-router-dom'
import MyButton from '../../UI/myButton/MyButton'

import styles from './Header.module.scss'

import logoImg from '../../assets/images/logo-dark.png'
import denmargLangIcon from '../../assets/images/main/denmark.png'
import engLangIcon from '../../assets/images/main/eng.png'
import Burger from './burger/Burger'

const Header = () => {
    return (
        <header className={styles.header}>
            <Burger />
            <Link to='/'><img className={styles.logo} src={logoImg} alt="logo" /></Link>
            <nav className={styles.nav}>
                <Link className={styles.link} to='/'>HOME</Link>
                <Link className={styles.link} to='/hut'>THE HUT</Link>
                <Link className={styles.link} to='/area'>THE AREA</Link>
                <Link className={styles.link} to='/booking'>BOOKING</Link>
                <Link className={styles.link} to='/about'>ABOUT US</Link>
                <Link className={styles.link} to='/faq'>FAQ</Link>

                <button className={styles.langbtn}>
                    <img className={styles.langIcon} src={engLangIcon} alt="languages change btn" />
                </button>
                <button className={styles.langbtn}>
                    <img className={styles.langIcon} src={denmargLangIcon} alt="languages change btn" />
                </button>
            </nav>
            <MyButton width='200px' text='BOOK NOW' bg='var(--color-btn)' link='/booking' />
        </header>
    )
}

export default Header
