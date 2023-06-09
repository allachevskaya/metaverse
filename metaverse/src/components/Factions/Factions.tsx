import Image from 'next/image'
import styles from './Factions.module.sass'
import ListGame from '../ListGame/ListGame'

const Factions = () => {
    return (
        <section className={styles.factions}>
            <div className={styles.factionsContainer}>
                <Image
                    quality={100}
                    width={2800}
                    height={900}
                    alt=""
                    src='/images/factions/bg.jpg'
                />
            </div>
            <div className={styles.factionsContent}>
                <div className={styles.factionsContentContainer}>
                    <div className={styles.factionsContentContainerBlur}></div>
                    <div className={styles.factionsContentContainerTitle}>
                        <h2>FACTIONS</h2>
                    </div>
                    <div className={styles.factionsContentContainerList  }>
                        <ListGame/>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Factions