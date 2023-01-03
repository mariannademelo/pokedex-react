import Card from "./Card";
import useFetch from "./useFetch";

// pokemon/stats to find the stats, height, weight, abilities, sprites front_default, id, types (grass, poisoon)

const Loop = () => {

  const { error, isPending, data: pokemonList } = useFetch('https://pokeapi.co/api/v2/pokemon/?limit=99&offset=0');
  const { data: pokemonSpecies } = useFetch('https://pokeapi.co/api/v2/pokemon-species/?limit=99&offset=0', '');

  return (
    <div className="container">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { pokemonSpecies && <Card pokemonSpecies={ pokemonSpecies } /> }
    </div>
  );
}

export default Loop;