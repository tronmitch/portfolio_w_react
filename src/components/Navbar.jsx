// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
import '../styles/Navbar.css'



// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
  return (
    <div className='card'>
      <div className='heading'>Contact</div>
    </div>
  );
}

export default Navbar;
