import { useContext, useState } from "react";
import { SortContext } from "../../App";

const Search = () => {

  const [ onInputFocus, setOnInputFocus ] = useState(false);
  const { search, setSearch } = useContext(SortContext);

  const toggleInputFocus = () => {
    if (search.length === 0) {
      setOnInputFocus(!onInputFocus);
    }
  }

  const clearInput = (e) => {
    e.preventDefault();
    setSearch('');
    setOnInputFocus(!onInputFocus);
  }

  return (  
    <div className={ onInputFocus ? 'c-search c-search--focused' : 'c-search' }>
      <form className="c-search__submit">
        <figure className="c-search__icon">
          <svg className="c-search__svg" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.94492 7.3262L6.04814 5.42942C6.01221 5.39349 5.96533 5.37474 5.91534 5.37474H5.7091C6.20126 4.80445 6.49968 4.0623 6.49968 3.24984C6.49968 1.45462 5.04507 0 3.24984 0C1.45462 0 0 1.45462 0 3.24984C0 5.04507 1.45462 6.49968 3.24984 6.49968C4.0623 6.49968 4.80445 6.20126 5.37474 5.7091V5.91534C5.37474 5.96533 5.39505 6.01221 5.42942 6.04814L7.3262 7.94492C7.39964 8.01836 7.51838 8.01836 7.59182 7.94492L7.94492 7.59182C8.01836 7.51838 8.01836 7.39964 7.94492 7.3262ZM3.24984 5.74972C1.86866 5.74972 0.749963 4.63102 0.749963 3.24984C0.749963 1.86866 1.86866 0.749963 3.24984 0.749963C4.63102 0.749963 5.74972 1.86866 5.74972 3.24984C5.74972 4.63102 4.63102 5.74972 3.24984 5.74972Z" fill="#212121"/>
          </svg>
        </figure>
        <input 
          value= { search }
          onChange={ (e) => setSearch(e.target.value.toLowerCase()) }
          onFocus={ toggleInputFocus }
          onBlur= { toggleInputFocus }
          type="text"
          className="c-search__input"
          placeholder="Procurar" />
        <button onClick={ (e) => clearInput(e) } className="c-search__clear">&#10006;</button>
      </form>
    </div>
  );
}

export default Search;