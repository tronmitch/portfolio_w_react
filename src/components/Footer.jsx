// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
import '../styles/Footer.css'
import '../styles/style.css'


// In Navbar, we can assign a style from an object by using curly braces
function Footer() {
  return (
    <footer>
    <section id="about">
        <h3>About Me</h3>
        <p>I Studied Mechanical Engineering at BYU.  
            After graduation I spent ten years working at Belcan Engineering.
            I worked on CAD automation tools for clients such as Pratt & Whitney and GE.
            I've spent the last 5 years working for CDSvisual devloping 3d visulations of our clients products.
            I currently live in Orem Utah with my wife and 4 children. When I have the time I love to play most sports, but ultimate frisbee is my all-time favorite.
        </p>
        <div class="vl"></div>
    </section>
    <section id="contact"><h3>Contact Information</h3>
    <p>Cell:  775-225-1472</p>
    <p>Email: theron.mitchell@gmail.com</p>
    <p>Linkedin: <a href="https://www.linkedin.com/in/theron-mitchell-6015184/">linkedin.com/in/theron-mitchell-6015184</a></p>
    </section>
</footer>
  );
}

export default Footer;

