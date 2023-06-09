import styles from './Navigation.module.sass'
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';


interface navigationProps {
    navigationItems: string[]
    id: number
}


const Navigation: React.FC<navigationProps> = ({ navigationItems, id }) => {
    //отслеживание скролла
    const handleClickScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={styles.navigation} >
            <ul className={styles.navigationList}>
                {navigationItems.map((item, idx) =>
                    <li className={clsx({
                        [styles.navigationListItem]: true,
                        [styles.navigationListItemActive]: true && id == idx
                    })}
                        key={uuidv4()}
                        onClick={() => handleClickScroll(item)}
                        >
                        <span>{item}</span>

                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navigation