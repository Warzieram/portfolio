import { Link } from 'react-router-dom'
import ThemeButton from './ThemeButton';

function Navbar() {
  return (
    <nav>
      <ThemeButton />
      <Link to="/"> Accueil </Link>
      <Link to="/projects"> Mes projets </Link>
    </nav>
  );
}

export default Navbar
