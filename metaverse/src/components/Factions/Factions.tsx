import Image from 'next/image'
import styles from './Factions.module.sass'
import ListGame from '../ListGame/ListGame'
import Navigation from '../Navigation/Navigation'
import { useState } from 'react'
import AboutList from '../AboutList/AboutList';



const Factions = () => {
    // навигационное меню
    const navigationItems = ['Home', 'Factions', 'Roadmap'];

    // массив о игре
    const arrayList = [
        {
            name: 'blighted Badlands',
            image: '/images/factions/frame1.png',
            folder: '/images/factions/folderPink.png',
            id: 'blighted',
            description: ['Modern-day Dusktopia begins here',
                'The first thing that counts here is survival Only then can you think of profit; then finally domination',
                'Forge your alliances with the EON Corporation, the rival mafia gangs, or even an utterly corrupt police force - and crush all standing in your way'],
            background: '/images/listGames/BADLANDS.png',
            backgroundTitle: '/images/listGames/BADLANDS_TITLE.png',
            arrayImages: ['/images/listGames/plane.png', '/images/listGames/plane.png', '/images/listGames/plane.png', '/images/listGames/plane.png', '/images/listGames/plane.png']
        },
        {
            name: 'Glacial Frontier',
            image: '/images/factions/frame2.png',
            folder: '/images/factions/folderBlue.png',
            id: 'Glacial',
            description: ['The home of everything warfare in Dusktopia',
                'Mercenaries and soldiers take payouts from the Cabal to do its bidding - but some want more for themselves, and are willing to go against power itself to get it'
                , 'Which side are you joining? '], 
            background: '/images/listGames/GLACIAL.png',
            backgroundTitle: '/images/listGames/GLACIAL_TITLE.png',
            arrayImages: ['1', '2', '3']


        },
        {
            name: 'Sundered Grove',
            image: '/images/factions/frame3.png',
            folder: '/images/factions/folderPuplpe.png',
            id: 'Sundered',
            description: ['Dusktopia’s last remaining sanctuary of peace', 'Researchers and scientists congregate here to live in religious pacifism, spending their time developing a renewable energy source for the world','A small faction wants more - selling Aurium on the black market for their own personal gain',
            'Will you root out the traitors or join them?'],
            background: '/images/listGames/GROVE.png',
            backgroundTitle: '/images/listGames/GROVE_TITLE.png',
            arrayImages: ['1', '2', '3']


        },
        {
            name: 'blighted Badlands',
            image: '/images/factions/frame4.png',
            folder: '/images/factions/folderGreen.png',
            id: 'Sky Citadel',
            description: ['These are where the apex predators in Dusktopia reside',
            'The political and economic masters of all society: living high above the suffering of ordinary denizens, and calmly plot elevated pursuits like space colonization in absolute peace',
            'If you’re lucky enough to be part of it, hold on tight - everybody wants what you have'],
            background: '/images/listGames/SKY.png',
            backgroundTitle: '/images/listGames/SKY_TITLE.png',
            arrayImages: ['1', '2', '3']

        },
    ];

    //проверяет кликнули мы на кнопку подробнее или на картику в меню лист
    //если кликнули открываем дополнительный компонет about
    const [openAbout, setOpenAbout] = useState(false);

    //следит за айдишком в листе на который кликнули
    const [idActive, setIdActive] = useState(0);


    //получаем info игры о которой пойдет речь 
    const [isActiveGame, setIsActiveGame] = useState<GAME>({
        name: '',
        image: '',
        folder: '',
        id: '',
        description: [],
        background: '',
        backgroundTitle: '',
        arrayImages: []

    })

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
                                setIdActive= {setIdActive}
                                arrayList={arrayList}
                                idActive={idActive}
                                setIsActiveGame={setIsActiveGame}
                                setOpenAbout={setOpenAbout} 
                                openAbout= {openAbout}/>
                        </div>
                        <div className={styles.factionsContentContainerNavigation}>
                            <Navigation navigationItems={navigationItems} id={1} />
                        </div>

                    </div>
                </div>
            </section>
            {openAbout && <AboutList isActiveGame={isActiveGame} />}

        </>
    )
}
export default Factions