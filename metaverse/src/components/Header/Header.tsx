import styles from './Heade.module.sass'
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';


const Header = () => {


    return (
        <AnimatePresence>

            <header className={styles.mainHeader}>

                <div className={styles.mainHeaderContainer}></div>
            </header>

        </AnimatePresence>
    )
}

export default Header