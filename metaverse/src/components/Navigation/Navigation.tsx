import styles from './Navigation.module.sass'
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';


interface navigationProps {
    navigationItems: string[]
    id: number
}


const Navigation: React.FC<navigationProps> = ({ navigationItems, id }) => {


    return (
        <nav className={styles.navigation} >
            <ul className={styles.navigationList}>
                {navigationItems.map((item, idx) =>
                    <li className={clsx({
                        [styles.navigationListItem]: true,
                        [styles.navigationListItemActive]: true && id == idx
                    })}
                        key={uuidv4()}>
                        <span>{item}</span>

                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navigation