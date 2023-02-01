import Header from './Header';
import React from "react";
import Main from './Main';

export default function App() {

  const [charClass, setCharClass] = React.useState({});
  let apiUrl = "https://www.dnd5eapi.co/api";

  React.useEffect(() => {

     fetch(`${apiUrl}/classes/warlock`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCharClass(data);
      })
        
  }, []); 

  return (
    <div className="container">
      <Header />
      <div className='modules'>
        <Main 
          character={charClass}/>
      </div>
    </div>
  );
}