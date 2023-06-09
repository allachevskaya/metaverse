import styles from './AboutList.module.sass'

interface AboutListProps {
    isActiveName: string

}


const AboutList: React.FC<AboutListProps> = ({isActiveName}) => {
   
    return (
        <section id='' className={styles.about}>
            <h1>{isActiveName}</h1>
        </section>
    )
}
export default AboutList