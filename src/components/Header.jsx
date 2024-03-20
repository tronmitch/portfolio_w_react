// Here we are importing a CSS file as a dependency
import '../styles/Header.css';
import background_img from '../images/theron_profile.jpg'

function Header() {
  return (
<header className="header">
  <h1>Theron Mitchell</h1>
</header>
  );
}

export default Header;
