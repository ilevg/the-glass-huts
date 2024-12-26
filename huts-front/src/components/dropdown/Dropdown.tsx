import { useEffect, useState } from 'react'
import styles from './Dropdown.module.scss'

import addedIcon from '../../assets/images/added.png'
import plusIcon from '../../assets/images/plus.png'

interface Dataobj {
    id?: number
    title: string
    desc?: string
    text: string[]
}
interface DropdownProps {
    data: Dataobj[]
    optionsExtra?: Dataobj[]
    addBtn?: boolean
    onClick?: (item: Dataobj) => void
}

const Dropdown = ({ data, optionsExtra, addBtn, onClick }: DropdownProps) => {
    const [active, setActive] = useState<number | null>(null)

    const dropdownToogle = (index: number) => {
        active === index ? setActive(null) : setActive(index)
    }

    return (
        <div className={styles.dropdownCont}>
            {
                data.map((item, index) => (
                    <div key={`${item.title}${index}`} className={styles.dropdown}>
                        <div className={styles.dropHeader}>
                            <div className={styles.dropTitle}>
                                {
                                    addBtn && (
                                        <button onClick={() => onClick && onClick(item)} className={styles.addBtn} type="button">
                                            {
                                                optionsExtra?.some((v) => v.id === item.id) ? (
                                                    <img
                                                        width={24}
                                                        height={24}
                                                        src={addedIcon}
                                                        alt="icon added"
                                                    />
                                                ) : (
                                                    <img
                                                        width={24}
                                                        height={24}
                                                        src={plusIcon}
                                                        alt="icon add"
                                                    />
                                                )
                                            }
                                        </button>
                                    )
                                }
                                <div className={styles.titleCont}>
                                    <span className={styles.title}>{item.title}</span>
                                    {item.desc && <span>{item.desc}</span>}
                                </div>


                            </div>
                            <div onClick={() => dropdownToogle(index)} className={styles.arrowCont}>
                                {
                                    active === index ? '˄' : '˅'
                                }
                            </div>
                        </div>
                        <div className={`${styles.dropdownItem} ${active === index ? styles.dropdownActive : ''}`}>
                            {item.text.map((p, i) => (
                                <span key={i} className={styles.dropdownText}>{p}</span>
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Dropdown
