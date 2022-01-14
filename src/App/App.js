import Header from './Header';
import React from "react";
import Main from './Main';
import charData from '../data/characterData.js';

export default function App() {

  const [character, setCharacter] = React.useState(charData);
  let apiUrl = "https://www.dnd5eapi.co/api";

  React.useEffect(() => {

    async function callAPI(char, index) {
      let response = await fetch(`${apiUrl}/classes/${character[index].playerClass}`);
      let data = response.json();

      setCharacter(prevState => ({
        ...prevState,
        hitDice: data.hit_die
      }))

      }

    character.forEach((char,index) => callAPI(char, index));
        
  }, []); 

    // const classArray = character.map(player => {
    //   return <Main 
    //             character={player}
    //             key={player.key}
    //           />
    // })

  return (
    <div className="container">
      <Header />
      <div className='modules'>
        {/* {classArray} */}
        <Main 
          character={character}/>
      </div>
    </div>
  );
}