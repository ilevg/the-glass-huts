import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

import payImg from '../../assets/images/pay.png'
import payImgF from '../../assets/images/pay-1.png'
import payImgS from '../../assets/images/pay-2.png'
import payImgT from '../../assets/images/pay-3.png'
import arrowBtn from '../../assets/images/arrowBtn.png'


const Footer = () => {
    const payArr = [payImg, payImgF, payImgS, payImgT]
    return (
        <footer className={styles.footer}>
            <div className={styles.newsCont}>
                <div className={styles.formContainer}>
                    <h3 className={styles.newsTitle}>Newsletter</h3>
                    <form className={styles.form}>
                        <input className={styles.formInput} type="text" name="" id="" placeholder='Email Adrdess' />
                        <button className={styles.formBtn} type='button'>
                            <img src={arrowBtn} alt="btn" />
                        </button>
                    </form>
                    <p className={styles.formText}>Sign up to our newsletter for special things and receive 10% off your next order.</p>
                </div>

                <p>© 2021 The Glass Huts</p>
            </div>
            <div className={styles.navCont}>
                <nav>
                    <ul className={styles.navList}>
                        <li ><Link className={styles.navLink} to='/terms'>TERMS AND CONDITIONS</Link></li>
                        <li ><Link className={styles.navLink} to='/cancellation'>CENCELLATION POLICY</Link></li>
                        <li ><Link className={styles.navLink} to='/privacy'>PRIVACY POLICY</Link></li>

                    </ul>
                </nav>
                <div className={styles.payMeth}>
                    {
                        payArr.map((img, index) => (
                            <img className={styles.payMethImg} key={index} src={img} alt="pay meths" />
                        ))
                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer
