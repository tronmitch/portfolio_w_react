import "../styles/style.css"
import backgroundImg from '../images/background.jpg';
import profileImg from '../images/theron_profile.jpg';

function Header() {
  return (
    <header className="flex">
      <h1 id="header">Theron Mitchell</h1>
      <nav>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    
  );
}

export default Header;
