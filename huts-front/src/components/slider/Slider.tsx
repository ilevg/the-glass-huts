import React, { useEffect, useState } from 'react';
import styles from './Slider.module.scss';
import arrowBtn from '../../assets/images/arrowBtn.png';
import arrowBtnRight from '../../assets/images/arrowBtnRight.png';

interface SliderProps {
    width: string;
    height: string;
    imgArr: string[];
}

const Slider: React.FC<SliderProps> = ({ width, height, imgArr }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderHandler = (direction: 'prev' | 'next') => {
        if (direction === 'prev') {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? imgArr.length - 1 : prevIndex - 1
            );
        } else {
            setCurrentIndex((prevIndex) =>
                prevIndex === imgArr.length - 1 ? 0 : prevIndex + 1
            );
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === imgArr.length - 1 ? 0 : prev + 1));
        }, 4000);

        return () => clearInterval(interval);
    }, [imgArr.length]);

    const imgWidth = width === '100%' ? `${100 / imgArr.length}%` : width

    return (
        <div
            style={{
                width: width,
                height: height,
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            <div className={styles.slidesIndicator}>
                <span>01</span>
                <div className={styles.slidesItems}>
                    {
                        imgArr.map((_, index) => (
                            <span key={index} className={`${styles.slidesItem} ${currentIndex === index ? styles.active : ''}`}></span>
                        ))
                    }
                </div>
                <span>0{imgArr.length}</span>
            </div>

            <div
                className={styles.slider}
                style={{
                    transform: `translateX(-${currentIndex * (100 / imgArr.length)}%)`,
                    width: `${imgArr.length * 100}%`,
                }}
            >
                {imgArr.map((img, index) => (
                    <div
                        key={index}
                        className={styles.sliderBg}
                        style={{
                            backgroundImage: `url(${img})`,
                            height: height,
                            width: imgWidth,
                        }}
                    ></div>
                ))}
            </div>
            <div className={styles.btnsCont}>
                <button type="button" onClick={() => sliderHandler('prev')}>
                    <img
                        className={styles.btn}
                        width={33}
                        height={15}
                        src={arrowBtnRight}

                        alt="Previous"
                    />
                </button>
                <button type="button" onClick={() => sliderHandler('next')}>
                    <img
                        className={styles.btn}
                        width={33}
                        height={15}
                        src={arrowBtn}

                        alt="Next"
                    />
                </button>
            </div>
        </div>
    );
};

export default Slider;
