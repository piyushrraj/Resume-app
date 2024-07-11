
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import TechStack from './components/TechStack/TechStack.jsx';
import Experience from './components/Experience/Experience.jsx';
import Projects from './components/Projects/Projects.jsx';
function App() {
  
  
  return (
    <div className ='app'>
      <Navbar/>
      <HomePage/>
      <TechStack/>
      <Experience/>
      <Projects/>
    </div>
  )
}

export default App
