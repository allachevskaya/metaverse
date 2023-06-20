import { Parallax } from 'react-scroll-parallax'
import styles from './AboutList.module.sass'


interface AboutListProps {
    isActiveGame: GAME
}


const AboutList: React.FC<AboutListProps> = ({ isActiveGame }) => {
    console.log(isActiveGame.id)
    
    return (
        <Parallax speed={15}>
            <section id={isActiveGame.id} className={styles.about}>
                <h1>{isActiveGame.description[0]}</h1>
                <h1>{isActiveGame.id}</h1>
            </section>
        </Parallax> 

    )
}
export default AboutList