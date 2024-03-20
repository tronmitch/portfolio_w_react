// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
import '../styles/Footer.css'



// In Navbar, we can assign a style from an object by using curly braces
function Footer() {
  return (
    <div className='card'>
      <div className='footer'>
        <h2>About</h2>
        <p>With a Mechanical Engineering BS from BYU and a minor in Math, I have honed...</p>
      </div>
      <div className='vertical-line'></div>
      <div className='contact-info'>
        <h2>Contact</h2>
        <p>theron.mitchell@gmail.com</p>
        <p>775-225-1472</p>
      </div>
    </div>
  );
}

export default Footer;

