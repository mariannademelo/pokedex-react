import './resources/styles/index.scss';
import Header from './resources/components/Header';
import Loop from './resources/components/Loop';
import { createContext, useState } from 'react';
import Pokemon from './resources/components/Pokemon';

export const SortContext = createContext();

function App() {

	const [ hasSortChanged, setHasSortChanged ] = useState(false);
	const [ getPokemonName, setGetPokemonName ] = useState([]);
	const [ showSingle, setShowSingle ] = useState(false);
	
  const [ search, setSearch ] = useState('');
  const toggleSortType = () => {
    setHasSortChanged(!hasSortChanged);
  }

	const contextValue = {
		hasSortChanged,
		toggleSortType,
		search,
		setSearch,
		getPokemonName,
		setGetPokemonName,
		showSingle,
		setShowSingle
	}

	return (
		<SortContext.Provider value = { contextValue }>
			<div className="Pokedex">
				<Header />
				<Loop />
				<Pokemon />
			</div>
		</SortContext.Provider>
	);
}

export default App;
