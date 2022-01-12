import Header from './Header';
import React from "react";
import Main from './Main';
import charData from '../data/characterData.js';

export default function App() {

  const [character, setCharacter] = React.useState(charData);

  React.useEffect(() => {

          fetch(`https://www.dnd5eapi.co/api/classes/${character.playerClass}`)
            .then(res => res.json())
            .then(data => {
              console.log(data)
                setCharacter(prevState => ({
                  ...prevState,
                  hitDice: data.hit_die,
                  proficiencies: data.proficiencies
                }))
            })
        
  }, []); 

  console.log(character)

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