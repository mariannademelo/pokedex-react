import Logo from './Logo';
import Sort from './Sort';
import Search from './Search';

const Header = () => {
  return (  
    <header className="c-header">
      <Logo />
      <Sort />
      <Search />
    </header>
  );
}

export default Header;