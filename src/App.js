import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}/>
        <Route index element={<About />} />
        <Route path="projects" element={<Projects />}/>
        <Route path="contact" element={<Contact />}/>
      </Routes>
    </>
  )
}

export default App;
