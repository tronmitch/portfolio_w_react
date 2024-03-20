// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
import '../styles/Footer.css'



// In Navbar, we can assign a style from an object by using curly braces
function Footer() {
  return (
    <div className='card'>
      <div className='footer'>
        <h2>About</h2>
        <p>
With a Mechanical Engineering BS from BYU and a minor in Math, I have honed my expertise in CAD design over 15 years, mastering Creo NX, SolidWorks, and more. As a Technical Project Manager, I bring a blend of analytical prowess and creative problem-solving to every project. Outside of work, my life is enriched by my family of four kids and my passion for Ultimate Frisbee, reflecting my commitment to teamwork and strategic play both professionally and personally</p>
      </div>
      <h2>Contact</h2>
      <p>theron.mitchell@gmail.com</p>
      <p>775-225-1472</p>
    </div>
  );
}

export default Footer;
