import Image from 'next/image'
import styles from './Factions.module.sass'
import ListGame from '../ListGame/ListGame'
import Navigation from '../Navigation/Navigation'

const Factions = () => {
    const navigationItems = ['Home', 'Factions', 'Roadmap']
    return (
        <section id='Factions' className={styles.factions}>
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
                    <div className={styles.factionsContentContainerNavigation}>
                    <Navigation navigationItems={navigationItems} id={1} />
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Factions