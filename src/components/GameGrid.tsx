import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames'
import GameCard from './GameCard';

const GameGrid = () => {
    const {error, games} = useGames();
    return (
        <>
            {error && <Text>{error}</Text>} 
            <SimpleGrid columns={{sm: 1, md: 2, lg: 4, xl:5 }} padding='10' spacing={10}>
            {/* <li key={game.id}>{game.name}</li> */}
                {games.map(game => <GameCard key={game.id} game={game}/>)}
            </SimpleGrid>
        </>
    )
}

export default GameGrid;
