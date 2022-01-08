import Header from './Header';
import React from "react";
import Main from './Main';
import charData from '../data.js';

export default function App() {
const [character, setCharacter] = React.useState(charData);

React.useEffect(() => {

  async function updateChar() {
  
      const response = await fetch(`https://www.dnd5eapi.co/api/classes/${charData.playerClass}`);
      const data = response.json();
      setCharacter(prevState => ({
          ...prevState,
          hitDice: data.hit_die
      }));
  }

  updateChar();
}, [character]);

console.log(character)
  // const classArray = character.map(playerClass => {
  //   return <Main 
  //             charClass={playerClass}
  //           />
  // })

  return (
    <div className="container">
      <Header />
      {/* {classArray} */}
    </div>
  );
}