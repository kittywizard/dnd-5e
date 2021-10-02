import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';

function App() {
  return (
    <div className="container">
      <Header />
      <Main charClass="barbarian" />
    </div>
  );
}

export default App;
