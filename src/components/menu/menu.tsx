import styles from './menu.module.scss';
import classNames from 'classnames';

export interface MenuProps {
    className?: string;
}

const sortBy: string[] = ['Popularity', 'Most Voted', 'Release Date'];
const genre: string[] = ['Action', 'Comedy', 'Horror'];

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-menus-and-templates
 */
export const Menu = ({ className }: MenuProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.logo}>
                <img src="https://i.imgur.com/zYa4iMN.png" className={styles.logoimg} />
                <span className={styles.logotxt}>SantiMovie</span>
            </div>
            <span className={styles.title}>Sort By</span>
            <hr className={styles.hr} />
            <ul className={styles.list}>
                {sortBy.map((item) => (
                    <li className={styles.listItem} key={item}>
                        {item}
                    </li>
                ))}
            </ul>
            <span className={styles.title}>Genre</span>
            <hr className={styles.hr} />
            <ul className={styles.list}>
                {genre.map((item) => (
                    <li className={styles.listItem} key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
