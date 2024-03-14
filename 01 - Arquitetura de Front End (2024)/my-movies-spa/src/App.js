import './App.css';
import { About } from './templates/About';
import { Home } from './templates/Home';
import { NaoEncontrada } from './templates/NaoEncontrada';
import { Header } from './components/Header';

import { Routes, Route } from "react-router-dom";
import { DetalheDoFilme } from './templates/DetalheDoFilme';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="movie/:id" element={<DetalheDoFilme />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </div>
  );
}

export default App;
