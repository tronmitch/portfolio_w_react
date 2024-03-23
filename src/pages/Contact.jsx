import '../App.css'
import {useState} from 'react';


export default function Contact() {
// Define state for each input field
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log("submit button")
    setName('');
    setEmail('');
    setMessage('');
  }
 

return (
  <div>
    <h1>Contact Page</h1>
    <form id="contact-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input 
          // type="text" 
          // id="name" 
          // name="name" 
          value={name} // Set the input's value to state
          onChange={(e) => setName(e.target.value)} // Update state on change
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input 
          // type="email" 
          // id="email" 
          // name="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="message">Message:</label>
        <textarea 
          // id="message" 
          // name="message" 
          rows="4" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
);
}