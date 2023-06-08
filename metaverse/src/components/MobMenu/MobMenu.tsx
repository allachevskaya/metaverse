import { Dispatch, SetStateAction } from 'react';
import styles from './MobMenu.module.sass';
import { AnimatePresence, motion } from 'framer-motion';
import i from '../../../public/images/main/mobMenuBg.png'
import Image from 'next/image';
import Link from 'next/link';

interface propsMobMenu {
    setMobileMenu: Dispatch<SetStateAction<boolean>>
}


const MobMenu: React.FC<propsMobMenu> = ({ setMobileMenu }) => {
    return (
        <AnimatePresence>
            <section
                className={styles.mobMenu}

            >
                <motion.div className={styles.mobMenuContainer}
                    initial={{ y: -300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 300, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 50 }}
                >
                    <div className={styles.mobMenuContainerMain}>
                        <div className={styles.mobMenuContainerMainLogo}>
                            <Image
                                width={1440}
                                height={1440}
                                alt=''
                                src='/images/icons/logo.png'
                            />
                        </div>
                        <div onClick={() => setMobileMenu(false)} className={styles.mobMenuContainerMainIcon}>
                            <Image
                                width={1440}
                                height={1440}
                                alt=''
                                src='/images/icons/close.svg'
                            />
                        </div>
                    </div>
                    <nav className={styles.mobMenuContainerNav}>
                        <ul>
                            <li>
                                <p>Home</p>
                            </li>
                            <li>
                                <p>Factions</p>
                            </li>
                            <li>
                                <p>Roadmap</p>
                            </li>
                            <li>
                                <p>Collaborations</p>
                            </li>
                            <li>
                                <p>FAQ</p>
                            </li>
                            <li>
                                <p>Team</p>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.mobMenuContainerNetWorks}>
                        <Link href='' className={styles.mobMenuContainerNetWorksItem}>
                            <Image
                                width={1440}
                                height={1440}
                                alt=''
                                src='/images/icons/iconDe.svg'
                            />
                        </Link>
                        <Link href='' className={styles.mobMenuContainerNetWorksItem}>
                            <Image
                                width={1440}
                                height={1440}
                                alt=''
                                src='/images/icons/iconTwi.svg'
                            />
                        </Link>
                        <Link href='' className={styles.mobMenuContainerNetWorksItem}>
                            <Image
                                width={1440}
                                height={1440}
                                alt=''
                                src='/images/icons/iconM.svg'
                            />
                        </Link>
                    </div>
                </motion.div>

            </section>
        </AnimatePresence>
    )
}

export default MobMenu



