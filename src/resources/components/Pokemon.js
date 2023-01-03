import { useContext } from 'react';
import { SortContext } from '../../App';
import PokemonBody from './PokemonBody';
import PokemonHeader from './PokemonHeader';
import useFetch from "./useFetch";

const Pokemon = () => {
  const { getPokemonName, showSingle, setShowSingle } = useContext(SortContext);

  const { data: pokemon } = useFetch('https://pokeapi.co/api/v2/pokemon-species/' + getPokemonName, getPokemonName);
  const { data: pokemonDetails } = useFetch('https://pokeapi.co/api/v2/pokemon/' + getPokemonName, getPokemonName);

  const handleBack = () => {
    setShowSingle(false);
  }
  
  return (
    <div className={ showSingle ? `Pokemon__single c-pokemon ` : `Pokemon__single c-pokemon c-pokemon--hidden` }>
      { pokemon && pokemon.name && 
        <div className={ `c-pokemon__content c-pokemon__content--${ pokemon.color.name }` }>
          <PokemonHeader pokemon={ pokemon } handleBack={ handleBack } />
          {/* { pokemon && <PokemonHeader pokemon={ pokemon } handleBack={ handleBack } /> } */}
          { pokemonDetails && pokemonDetails.stats && <PokemonBody pokemonDetails={ pokemonDetails } pokemon={ pokemon } /> }
          {/* <PokemonBody pokemonDetails={ pokemonDetails } pokemon={ pokemon } /> */}
        </div>
      }
    </div>
  );
}

export default Pokemon;