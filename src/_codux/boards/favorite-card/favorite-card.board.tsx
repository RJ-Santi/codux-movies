import { createBoard } from '@wixc3/react-board';
import { FavoriteCard } from '../../../components/favorite-card/favorite-card';

export default createBoard({
    name: 'FavoriteCard',
    Board: () => (
        <FavoriteCard
            movie={{
                id: 43,
                overview:
                    'A teenager becomes a major competitor in the world of drift racing after moving in with his father in Tokyo to avoid a jail sentence in America.',
                release_date: '2006',
                title: 'Tokyo Drift',
                vote_average: 6,
                poster_path: 'https://i.ebayimg.com/images/g/eVUAAOSwgQ9VoAKZ/s-l500.jpg',
            }}
        />
    ),
});
