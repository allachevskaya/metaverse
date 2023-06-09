import Image from 'next/image'
import styles from './Factions.module.sass'
import ListGame from '../ListGame/ListGame'
import Navigation from '../Navigation/Navigation'
import { useState } from 'react'
import AboutList from '../AboutList/AboutList';


type aboutGame = {
    service: boolean,
    cases: boolean,
    blog: boolean,
    about: boolean,
    contacts: boolean
}

const Factions = () => {
    // навигационное меню
    const navigationItems = ['Home', 'Factions', 'Roadmap'];

    // массив о игре
    const arrayList = [
        {
            name: 'blighted Badlands',
            image: '/images/factions/frame1.png',
            folder: '/images/factions/folderPink.png',
            id: 'blighted'

        },
        {
            name: 'Glacial Frontier',
            image: '/images/factions/frame2.png',
            folder: '/images/factions/folderBlue.png',
            id: 'Glacial'

        },
        {
            name: 'Sundered Grove',
            image: '/images/factions/frame3.png',
            folder: '/images/factions/folderPuplpe.png',
            id: 'Sundered'


        },
        {
            name: 'blighted Badlands',
            image: '/images/factions/frame4.png',
            folder: '/images/factions/folderGreen.png',
            id: 'Sky Citadel'

        },
    ];

    //проверяет кликнули мы на кнопку подробнее или на картику в меню лист
    //если кликнули открываем дополнительный компонет about
    const [openAbout, setOpenAbout] = useState(false);

    //следит за айдишком в листе на который кликнули
    const [idActive, setIdActive] = useState(0);
    //получаем имя игры о которой пойдет речь 
    const [isActiveName, setIsActiveName] = useState<string>('');
    
    return (
        <>
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
                        <div className={styles.factionsContentContainerList}>
                            <ListGame 
                            setIdActive={setIdActive} 
                            arrayList={arrayList} 
                            idActive={idActive} 
                            setIsActiveName={setIsActiveName}
                             setOpenAbout={setOpenAbout}/>
                        </div>
                        <div className={styles.factionsContentContainerNavigation}>
                            <Navigation navigationItems={navigationItems} id={1} />
                        </div>

                    </div>
                </div>
            </section>
            {openAbout && <AboutList isActiveName={isActiveName}/>} 
             
        </>
    )
}
export default Factions