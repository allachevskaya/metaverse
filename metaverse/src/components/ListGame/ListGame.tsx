import Image from 'next/image'
import styles from './ListGame.module.sass'



const ListGame = () => {
    return (
        <div className={styles.listGame}>
            <div className={styles.listGameItem}>
                <div className={styles.listGameItemContent}>
                    <h3>blighted Badlands</h3>
                    <div className={styles.listGameItemContentImg}>
                        <Image
                            quality={100}
                            width={2800}
                            height={900}
                            alt=""
                            src='/images/factions/frame1.png'
                        />
                    </div>
                </div>
                <div data-circle='1' className={styles.listGameItemCircles}>
                    <div className={styles.listGameItemCirclesCircle}>
                        <div className={styles.listGameItemCirclesCircleShadow}></div>
                    </div>
                    <div className={styles.listGameItemCirclesCenterActive}></div>
                </div>
            </div>
            <div className={styles.listGameItem}>
                <div className={styles.listGameItemContent}>
                    <h3>blighted Badlands</h3>
                    <div className={styles.listGameItemContentImgNotActive}>
                        <Image
                            quality={100}
                            width={2800}
                            height={900}
                            alt=""
                            src='/images/factions/frame1.png'
                        />
                    </div>
                </div>
                <div data-circle='2' className={styles.listGameItemCircles}>
                    <div className={styles.listGameItemCirclesCircle}>
                        <div className={styles.listGameItemCirclesCircleShadow}></div>
                    </div>
                    <div className={styles.listGameItemCirclesCenter}></div>
                </div>
            </div>
            <div className={styles.listGameItem}>
                <div className={styles.listGameItemContent}>
                    <h3>blighted Badlands</h3>
                    <div className={styles.listGameItemContentImgNotActive}>
                        <Image
                            quality={100}
                            width={2800}
                            height={900}
                            alt=""
                            src='/images/factions/frame1.png'
                        />
                    </div>
                </div>
                <div data-circle='3' className={styles.listGameItemCircles}>
                    <div className={styles.listGameItemCirclesCircle}>
                        <div className={styles.listGameItemCirclesCircleShadow}></div>
                    </div>
                    <div className={styles.listGameItemCirclesCenter}></div>
                </div>
            </div>
            <div className={styles.listGameItem}>
                <div className={styles.listGameItemContent}>
                    <h3>blighted Badlands</h3>
                    <div data-line="line" className={styles.listGameItemContentImgNotActive}>
                        <Image
                            quality={100}
                            width={2800}
                            height={900}
                            alt=""
                            src='/images/factions/frame1.png'
                        />
                    </div>
                </div>
                <div data-circle='4' className={styles.listGameItemCircles}>
                    <div className={styles.listGameItemCirclesCircle}>
                        <div className={styles.listGameItemCirclesCircleShadow}></div>
                    </div>
                    <div className={styles.listGameItemCirclesCenter}></div>
                </div>
            </div>
           
            
           
        </div>
    )
}

export default ListGame



