import '../App.css'
import img from '../images/profile.png'

export default function About() {
  return (
    <div>
      <h1>About</h1>
    <div className = "about">
      <img className ="profile" src ={img} alt="Theron Mitchell Profile picture" />
      <p>
        I Studied Mechanical Engineering at BYU.  
        After graduation I spent ten years working at Belcan Engineering.
        I worked on CAD automation tools for clients such as Pratt & Whitney and GE.
        I havve spent the last 5 years working for CDSvisual devloping 3d visulations of our clients products.
        I currently live in Orem Utah with my wife and 4 children. When I have the time I love to play most sports, but ultimate frisbee is my all-time favorite.
      </p>
    </div>
    </div>
  );
}
