import styles from './card.module.scss';
import classNames from 'classnames';
import { monitorEventLoopDelay } from 'perf_hooks';

export interface CardProps {
    className?: string;
    movie: {
        id: string;
        poster_path?: string;
        title: string;
        overview: string;
        vote_average: number;
        release_date: string;
    };
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cards-and-templates
 */
export const Card = ({ className, movie }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src={movie.poster_path} className={styles.cardImg} />
            <div className={styles.details}>
                <h1>{movie.title}</h1>
                <span className={styles.rating}>{movie.vote_average}</span>
                <p className={styles.desc}>{movie.overview.substring(0, 220)}</p>
                <button className={styles.button}>+</button>
            </div>
        </div>
    );
};
