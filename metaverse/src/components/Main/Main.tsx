import { AnimatePresence } from "framer-motion"
import styles from './Main.module.sass'
import Image from "next/image"


const Main = () => {
    return (
        <AnimatePresence>
            <section className={styles.main}>
                <div className={styles.mainContainer}>
                    <Image
                    quality={100}
                    width={25800}
                    height={900}
                    alt=""
                    src='/images/main/mainBag.jpg'
                    />
                </div>
            </section>
        </AnimatePresence>
    )
}

export default Main