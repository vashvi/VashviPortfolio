// import logo from './logo.svg';
import './App.css';
import Front from "./Pages/Front"
import About from "./Pages/About"
import Services from './Pages/Services';
import Projects from './Pages/Projects';
import Certificates from './Pages/Certificates';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Front />
      <About />
      <Services />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
