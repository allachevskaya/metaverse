import { useMediaQuery } from '@/hooks/useMediaQuery';
import styles from './Header.module.sass'
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';


const Header = () => {
    const resize480 = useMediaQuery(480);

    return (
        <AnimatePresence>

            <header className={styles.mainHeader}>
                <div className={styles.mainHeaderContainer}>
                    <div className={styles.mainHeaderContainerLogo}>
                        <Image
                            width={1440}
                            height={1440}
                            alt=''
                            src='/images/icons/logo.png'
                        />
                    </div>
                    <div className={styles.mainHeaderContainerIcons}>
                        <Link href='' className={styles.mainHeaderContainerIconsIcon}>
                            <Image
                                width={1440}
                                height={1440}
                                alt=''
                                src='/images/icons/iconDe.svg'
                            />
                        </Link>
                        <Link href='' className={styles.mainHeaderContainerIconsIcon}>
                            <Image
                                width={1440}
                                height={1440}
                                alt=''
                                src='/images/icons/iconTwi.svg'
                            />
                        </Link>
                        <Link href='' className={styles.mainHeaderContainerIconsIcon}>
                            <Image
                                width={1440}
                                height={1440}
                                alt=''
                                src='/images/icons/iconM.svg'
                            />
                        </Link>
                    </div>
                </div>
            </header>

        </AnimatePresence>
    )
}

export default Header