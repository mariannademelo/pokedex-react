const Single = () => {

  const [pokemons, setPokemons] = useState(null);
  
  useEffect(() => {
    const getPokemons = async () => {
      const getPokemonsDetails = await Promise.all(pokemonList.results.map(el => {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${el.name}`);
      }))

      setPokemons(getPokemonsDetails.map(el => el.data))
    }

    getPokemons();
  }, [pokemonList])

  return (  
    <ul className="c-single">
    </ul>
  );
}

export default Single;