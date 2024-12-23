import React, { useEffect, useState } from 'react';
import styles from './InfoItem.module.scss'
import Slider from '../slider/Slider';

interface InfoProps {
    title?: string;
    text?: string;
    imgArr: string[] | string;
    infoFirst: boolean;
}

const InfoItem: React.FC<InfoProps> = ({ title, text, imgArr, infoFirst }) => {
    return (
        <div className={styles.cabins}>
            <div className={styles.cabinsCont}>
                {
                    infoFirst
                        ? <>
                            <div className={styles.cabinsDescCont}>
                                {
                                    title && <h2 className={styles.cabinsTitle}>{title}</h2>
                                }
                                {
                                    text && <p className={styles.cabinsDesc}>{text}</p>
                                }
                            </div>
                            <div className={styles.cabinsSliderCont}>
                                {
                                    typeof (imgArr) === 'string'
                                        ? <img width="100%" height="450px" src={imgArr} alt="hut" />
                                        : <Slider width="100%" height="450px" imgArr={imgArr} />
                                }
                            </div>
                        </>
                        : <>
                            <div className={`${styles.cabinsSliderCont}`}>
                                {
                                    typeof (imgArr) === 'string'
                                        ? <img width="100%" height="450px" src={imgArr} alt="hut" />
                                        : <Slider width="100%" height="450px" imgArr={imgArr} />
                                }
                            </div>

                            <div className={styles.cabinsDescCont}>
                                {
                                    title && <h2 className={styles.cabinsTitle}>{title}</h2>
                                }
                                {
                                    text && <p className={styles.cabinsDesc}>{text}</p>
                                }
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default InfoItem;
