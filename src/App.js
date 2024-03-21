// import logo from './logo.svg';
// import './App.css';
import Header from  '../src/components/Header'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import Card from '../src/components/Card'
import cardData from '../src/projects'

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Card projects = {cardData} />
      <Footer />
    </div>
  );
}

export default App;
