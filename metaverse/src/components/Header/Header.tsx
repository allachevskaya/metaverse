import { useMediaQuery } from '@/hooks/useMediaQuery';
import styles from './Header.module.sass'
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import MobMenu from '../MobMenu/MobMenu';


const Header = () => {
    const resize480 = useMediaQuery(480);
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <>

            {!resize480 && <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <div className={styles.headerContainerLogo}>
                        <Image
                            width={1440}
                            height={1440}
                            alt=''
                            src='/images/icons/logo.png'
                        />
                    </div>
                    <div className={styles.headerContainerIcons}>
                        <Link href='' className={styles.headerContainerIconsIcon}>
                            <Image
                                width={1440}
                                height={1440}
                                alt=''
                                src='/images/icons/iconDe.svg'
                            />
                        </Link>
                        <Link href='' className={styles.headerContainerIconsIcon}>
                            <Image
                                width={1440}
                                height={1440}
                                alt=''
                                src='/images/icons/iconTwi.svg'
                            />
                        </Link>
                        <Link href='' className={styles.headerContainerIconsIcon}>
                            <Image
                                width={1440}
                                height={1440}
                                alt=''
                                src='/images/icons/iconM.svg'
                            />
                        </Link>
                    </div>
                </div>
            </header>}
            {resize480 && <header className={styles.headerMob} >
                <div className={styles.headerMobContainer}>
                    <div className={styles.headerMobContainerLogo}>
                        <Image
                            width={1440}
                            height={1440}
                            alt=''
                            src='/images/icons/logo.png'
                        />
                    </div>
                    <div onClick={() => setMobileMenu(true)} className={styles.headerMobContainerIcon}>
                        <Image
                            width={1440}
                            height={1440}
                            alt=''
                            src='/images/icons/mobMenu.svg'
                        />
                    </div>
                </div>
            </header>}
            {mobileMenu && resize480 && <MobMenu setMobileMenu={setMobileMenu} />}

        </>
    )
}

export default Header