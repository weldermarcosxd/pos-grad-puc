import './App.css';
import { Header } from './components/Header';
import { MainContainer } from './components/MainContainer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <section>
        <MainContainer filmes={[{title: "clube da luta"},{title: "vanilla sky"},{title: "v de vingança"}]} ></MainContainer>
      </section>
    </div>
  );
}

export default App;
