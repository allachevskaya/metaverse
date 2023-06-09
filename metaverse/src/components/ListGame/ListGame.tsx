import Image from 'next/image'
import styles from './ListGame.module.sass'
import { Dispatch, SetStateAction, useState } from 'react'
import clsx from 'clsx'
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';

interface ListGameProps {
    setIdActive: Dispatch<SetStateAction<number>>,
    arrayList: {
        name: string;
        image: string;
        folder: string;
        id: string;
    }[],
    idActive: number,
    setOpenAbout: Dispatch<SetStateAction<boolean>>
    setIsActiveName: Dispatch<SetStateAction<string>>
}

const ListGame: React.FC<ListGameProps> = ({ arrayList, setIdActive, idActive, setOpenAbout,setIsActiveName }) => {

    // const [idActive, setIdActive] = useState(0)

    // const arrayList = [
    //     {
    //         name: 'blighted Badlands',
    //         image: '/images/factions/frame1.png',
    //         folder: '/images/factions/folderPink.png',
    //         id: 'blighted'

    //     },
    //     {
    //         name: 'Glacial Frontier',
    //         image: '/images/factions/frame2.png',
    //         folder: '/images/factions/folderBlue.png',
    //         id: 'Glacial'

    //     },
    //     {
    //         name: 'Sundered Grove',
    //         image: '/images/factions/frame3.png',
    //         folder: '/images/factions/folderPuplpe.png',
    //         id: 'Sundered'


    //     },
    //     {
    //         name: 'blighted Badlands',
    //         image: '/images/factions/frame4.png',
    //         folder: '/images/factions/folderGreen.png',
    //         id: 'Sky Citadel'

    //     },
    // ];

    //отслеживание скролла
    const handleClickScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (

        <div className={styles.listGame}>
            {arrayList.map((item, idx) =>
                <div key={uuidv4()} className={styles.listGameItem} onClick={() => setIdActive(idx)}>
                    <div className={styles.listGameItemContent}>
                        <h3>{item.name}</h3>
                        <motion.div data-line={idx}
                            className={clsx({
                                [styles.listGameItemContentImg]: true,
                                [styles.listGameItemContentImgNotActive]: true && idx !== idActive
                            })}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 360 }}
                            transition={{ duration: 0.7 }}

                        >
                            <Image
                                quality={100}
                                width={2800}
                                height={900}
                                alt=""
                                src='/images/factions/frame1.png'
                                
                            />
                            <div className={clsx({
                                [styles.listGameItemContentImgFolder]: true,
                                [styles.listGameItemContentImgFolderNotActive]: true && idx !== idActive
                            })}
                            onClick={() => {
                                // handleClickScroll(item.id)
                                setOpenAbout(true)
                                setIsActiveName(item.name)
                            }}>

                                <Image
                                    quality={100}
                                    width={2800}
                                    height={900}
                                    alt=""
                                    src={item.folder}
                                    
                                />

                                <div>
                                    <p >
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



