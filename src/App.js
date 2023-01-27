import './App.css';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Education from './pages/Education/Education';
import Header from './pages/Header/Header';
import Projects from './pages/Projects/Projects';
import Footer from './pages/Shared/Footer/Footer';
import Navbar from './pages/Shared/Navbar/Navbar';
import Skill from './pages/Skill/Skill';

function App() {
  return (
    <div className='bg-gray-700'>
      <Navbar />
      <Header />
      <Skill />
      <About/>
      <Education />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
