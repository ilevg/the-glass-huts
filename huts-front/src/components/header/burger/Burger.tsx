import { Link } from 'react-router-dom'
import styles from './Burger.module.scss'

import denmargLangIcon from '../../../assets/images/main/denmark.png'
import engLangIcon from '../../../assets/images/main/eng.png'
import { useEffect, useState } from 'react'

const Burger = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const menuToggle = () => setIsOpen(!isOpen)

    useEffect(() => {
        isOpen
            ? document.body.classList.add('overflow-hidden')
            : document.body.classList.remove('overflow-hidden')
    }, [isOpen])

    return (
        <div className={styles.burger}>
            <button className={`${isOpen ? styles.burgerBtnOpen : styles.burgerBtn}`} type="button" onClick={menuToggle}>
                <span className={`${isOpen ? styles.lineOpen : styles.line}`}></span>
                <span className={`${isOpen ? styles.lineOpenSec : styles.line}`}></span>
            </button>
            <div onClick={menuToggle} className={`${styles.navCont} ${!isOpen ? styles.navContClose : ''}`}>
                <nav className={`${styles.nav} ${isOpen ? styles.navOpen : styles.navClose}`}>
                    <Link className={styles.link} to='/'>HOME</Link>
                    <Link className={styles.link} to='/hut'>THE HUT</Link>
                    <Link className={styles.link} to='/area'>THE AREA</Link>
                    <Link className={styles.link} to='/booking'>BOOKING</Link>
                    <Link className={styles.link} to='/about'>ABOUT US</Link>
                    <Link className={styles.link} to='/faq'>FAQ</Link>

                    <div onClick={() => setIsOpen(!isOpen)}>
                        <button className={styles.langbtn}>
                            <img className={styles.langIcon} src={engLangIcon} alt="languages change btn" />
                        </button>
                        <button className={styles.langbtn}>
                            <img className={styles.langIcon} src={denmargLangIcon} alt="languages change btn" />
                        </button>
                    </div>

                </nav>
            </div>

        </div>
    )
}

export default Burger
