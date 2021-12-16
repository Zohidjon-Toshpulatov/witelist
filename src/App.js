import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import { TopHeader } from './components/TopHeader/TopHeader';
import { Home } from './pages/Home/Home';
import { Project } from './pages/Project/Project'
import { Leader } from './pages/Leader/Leader'
function App() {
  return (
    <div className="App">

      <TopHeader />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='leaderboard' element={<Leader />} />
        <Route path='project' element={<Project />} />
      </Routes>
      <Footer />
      <TopHeader />
    </div>
  );
}

export default App;
