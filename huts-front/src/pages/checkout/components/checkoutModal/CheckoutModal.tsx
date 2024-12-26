import styles from './CheckoutModal.module.scss'
import MyButton from '../../../../UI/myButton/MyButton'
import { useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom'

const CheckoutModal = () => {
    const [hidden, setHidden] = useState(false)
    const navigate = useNavigate()
    const modalHandle = () => {
        navigate('/')
        setHidden(true)
    }

    return (
        <div className={`${hidden ? styles.hidden : styles.container}`}>
            <div className={styles.modal}>
                <div className={styles.modalItems}>
                    <h2 className={styles.title}>Thank You</h2>
                    <span className={styles.desc}>Your order is confirmed!</span>
                    <MyButton onClick={modalHandle} width='80%' text='OK' bg='var(--color-btn)'></MyButton>
                </div>
            </div>
        </div>
    )
}

export default CheckoutModal
