import Image from 'next/image'
import styles from './ListGame.module.sass'
import { Dispatch, SetStateAction, useRef, useState } from 'react'
import clsx from 'clsx'
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';



interface ListGameProps {
    arrayList: GAME[],
    //следит за айдишком в листе на который кликнули
    setIdActive: Dispatch<SetStateAction<number>>
    idActive: number,
    //проверяет кликнули мы на кнопку подробнее или на картику в меню лист
    //если кликнули открываем дополнительный компонет about
    setOpenAbout: Dispatch<SetStateAction<boolean>>
    openAbout: boolean
    //получаем info игры о которой пойдет речь 
    setIsActiveGame: Dispatch<SetStateAction<GAME>>
}

const ListGame: React.FC<ListGameProps> = ({ arrayList, idActive, openAbout, setOpenAbout, setIsActiveGame, setIdActive }) => {



    //отслеживание скролла
    const handleClickScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };



    function handleCLick(e: React.SyntheticEvent<HTMLDivElement>, item: GAME, idx: number) {

        if (!(e.target instanceof HTMLDivElement)) {
            return;
        }

        switch (e.target.dataset.type) {
            case 'folder':
                if (!openAbout) {
                    setOpenAbout(true);
                }
                setIsActiveGame((prevState) => ({ ...prevState, id: item.id, description: item.description, backgroundTitle: item.backgroundTitle, background: item.background }))
                handleClickScroll(item.id)
            default:
                setIdActive(idx)
        }
    }



    return (
        <div className={styles.listGame}>
            {arrayList.map((item, idx) =>
                <div key={uuidv4()} className={styles.listGameItem} onClick={(e) => handleCLick(e, item, idx)}>
                    <div className={styles.listGameItemContent} >
                        <h3>{item.name}</h3>
                        <motion.div
                            data-line={idx}
                            className={clsx({
                                [styles.listGameItemContentImg]: true,
                                [styles.listGameItemContentImgNotActive]: true && idx !== idActive
                            })}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.7 }}


                        >
                            <Image
                                quality={100}
                                width={2800}
                                height={900}
                                alt=""
                                src='/images/factions/frame1.png'

                            />
                            <div
                                data-type='folder'
                                className={clsx({
                                    [styles.listGameItemContentImgFolder]: true,
                                    [styles.listGameItemContentImgFolderNotActive]: true && idx !== idActive
                                })}
                            >

                                <Image

                                    quality={100}
                                    width={2800}
                                    height={900}
                                    alt=""
                                    src={item.folder}

                                />

                                <div >
                                    <p>
                                        More
                                    </p>
                                </div>


                            </div>
                        </motion.div>
                    </div>
                    <div data-circle={idx} className={styles.listGameItemCircles}>
                        <div className={styles.listGameItemCirclesCircle}>
                            <div className={styles.listGameItemCirclesCircleShadow}></div>
                        </div>
                        <motion.div
                            className={clsx({
                                [styles.listGameItemCirclesCenter]: true,
                                [styles.listGameItemCirclesCenterActive]: true && idx == idActive
                            })}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.7 }}
                        >

                        </motion.div>
                    </div>
                </div>
            )}


        </div>
    )
}

export default ListGame



