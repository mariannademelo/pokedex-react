import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { SortContext } from "../../App";

const Card = ({ pokemonSpecies }) => {
  const spriteUrl = (id) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  const [ pokemons, setPokemons ] = useState(null);

  const { hasSortChanged, search, setGetPokemonName, setShowSingle } = useContext(SortContext);

  useEffect(() => {
    const getPokemons = async () => {
      const getPokemonDetails = await Promise.all(pokemonSpecies.results.map(pokemon => {
        return axios.get('https://pokeapi.co/api/v2/pokemon-species/' + pokemon.name);
      }))

      if (hasSortChanged) {
        setPokemons((getPokemonDetails.map(pokemon => pokemon.data)).sort((a, b) => {
          let nameA = a.name.toLowerCase(),
          nameB = b.name.toLowerCase();

          if (nameA < nameB) {
            return -1;
          } else if (nameA > nameB) {
            return 1;
          }

          return 0;
        }));
      } else {
        setPokemons(getPokemonDetails.map(pokemon => pokemon.data));
      }

      if (search.length > 0) {
        const filteredPokemons = getPokemonDetails.filter(pokemon => {
          if ( pokemon.data.name.includes(search) ) {
            return pokemon;
          }
        })

        setPokemons(filteredPokemons.map(pokemon => pokemon.data));
      }
    }

    getPokemons();
  }, [pokemonSpecies, hasSortChanged, search]);

  const handleGetPokemonName = (e) => {
    setGetPokemonName(e.currentTarget.getAttribute('data-name'));
    setShowSingle(true);
  }

  return (  
    <ul className="c-loop">
      {pokemons && pokemons.map(pokemon => (
        <li className="c-loop__item" key={ pokemon.id }>
          <button onClick={(e) => handleGetPokemonName(e)} data-name={ pokemon.name }>
            <div className={ `c-card c-card--${ pokemon.color.name }` }>
              <span className="c-card__id">#{ pokemon.id }</span>
              <figure className="c-card__picture">
                <img src={ spriteUrl( pokemon.id ) } alt="" />
              </figure>
              <h4 className={ `c-card__name ${ pokemon.color.name }` }>{ pokemon.name }</h4>
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Card;