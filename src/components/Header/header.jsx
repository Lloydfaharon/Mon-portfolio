import "./header.css";
import Image from"../../image/d2.jpg"


function App() {
  return (
    <nav className="navigation">
      <div className="block-logo">
        <img src={Image} className="image-header" alt="logo du site"/> 
        <h1>evarl.com</h1>
      </div>
      <div className="link">
        <a href="#about">A propos</a>
        <a href="#projects">Projets</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default App;
