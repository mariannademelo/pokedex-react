const PokemonHeader = ({ pokemon, handleBack }) => {
  
  return (
    <section className="c-pokemon__header">
      <button className="c-pokemon__back" onClick={ handleBack }>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.23045 17.5117L10.0039 16.7383C10.1869 16.5553 10.1869 16.2585 10.0039 16.0754L3.94408 10.0157H17.2812C17.5401 10.0157 17.75 9.80578 17.75 9.54691V8.45316C17.75 8.1943 17.5401 7.98441 17.2812 7.98441H3.94408L10.0039 1.92465C10.1869 1.7416 10.1869 1.4448 10.0039 1.26172L9.23045 0.488359C9.04741 0.305312 8.75061 0.305312 8.56752 0.488359L0.387285 8.66859C0.204238 8.85164 0.204238 9.14844 0.387285 9.33152L8.56752 17.5118C8.75057 17.6948 9.04737 17.6948 9.23045 17.5117Z" fill="white"/></svg>
      </button>
      <span className="c-pokemon__name">{ pokemon.name }</span>
      <span className="c-pokemon__id">#{ pokemon.id }</span>
    </section>
  );
}

export default PokemonHeader;