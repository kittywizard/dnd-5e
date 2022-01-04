import Header from './Header';
import Main from './Main';

export default function App() {

  const playerClasses = ["barbarian", "cleric", "fighter", "wizard"];

  const classArray = playerClasses.map(playerClass => {
    return <Main 
              charClass={playerClass}
            />
  })

  return (
    <div className="container">
      <Header />
      {classArray}
    </div>
  );
}