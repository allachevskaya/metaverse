import { AnimatePresence } from "framer-motion"
import styles from './Main.module.sass'
import Image from "next/image"
import Link from "next/link"
import Navigation from "../Navigation/Navigation"
import { useMediaQuery } from "@/hooks/useMediaQuery"

const Main = () => {

    
    const navigationItems = ['Home', 'Factions', 'Roadmap']

    return (
        <AnimatePresence>
            
                <section className={styles.main}>
                    <div className={styles.mainContainer}>
                        <Image
                            quality={100}
                            width={2800}
                            height={900}
                            alt=""
                            src='/images/main/mainBag.jpg'
                        />
                    </div>
                    <div className={styles.mainContent}>
                        <div className={styles.mainContentContainer}>
                            <div className={styles.mainContentContainerTitle}>
                                <h1>FROM DUSK TO DAWN</h1>
                            </div>
                            <div className={styles.mainContentContainerBtns}>

                                <Link
                                    href={''}

                                    className={styles.mainContentContainerBtnsBtn}
                                >
                                    <p>Mint</p>
                                </Link>

                                <Link href={''}

                                    className={styles.mainContentContainerBtnsActive}
                                >
                                    <p>Connect Wallet</p>
                                </Link>

                            </div>
                            <div className={styles.mainContentContainerNavigation}>
                                <Navigation navigationItems={navigationItems} id={0} />
                            </div>
                        </div>
                    </div>
                </section>
            
           
        </AnimatePresence>
    )
}

export default Main