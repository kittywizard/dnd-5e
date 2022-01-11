import Header from './Header';
import React from "react";
import Main from './Main';
import charData from '../data.js';

export default function App() {

  const [character, setCharacter] = React.useState(charData);
  const [data, setData] = React.useState([]);

  const characterArray = ["cleric", "monk"];

  //need to call the API and grab class data for each of the provided classes

  React.useEffect(() => {
      characterArray.forEach(char => {
          fetch(`https://www.dnd5eapi.co/api/classes/${char}`)
            .then(res => res.json())
            .then(data => {
                setData(prevState => ([
                ...prevState,
                data
                ]))
            })
        }); 
        
  }, []);

  //so now data has all the API info stored in it - we shouldn't need to make anymore API calls (theoretically - for now)
  //

  data.forEach(char => {
      setCharacter(prevState, ({
        ...prevState,
        
      }))
  })
  
    //const classArray = character.map(playerClass => {
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