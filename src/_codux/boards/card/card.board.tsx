import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => (
        <Card
            movie={{
                id: 123,
                overview:
                    'Kazakh TV talking head Borat is dispatched to the United States to report on the greatest country in the world. With a documentary crew in tow, Borat becomes more interested in locating and marrying Pamela Anderson.',
                release_date: '10/22/1999',
                title: 'Borat',
                vote_average: 8,
                poster_path:
                    'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51RPHFy00cL._AC_UF894,1000_QL80_.jpg',
            }}
        />
    ),
});
