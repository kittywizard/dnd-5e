
// async function fetchData(charClass) {
//     let data = await fetch(`https://www.dnd5eapi.co/api/classes/${charClass}`);
//     let json = await data.json();
    

//     console.log(json)
//     const displayName = json.name;
//     const hitDie = json.hit_die;
//     const displayDiv = document.createElement('div');

//     displayDiv.textContent = displayName + " " + hitDie;

// }

function Main(props) {
    //fetchData(props.charClass);

    return (
        <main className="main">
           {props.charClass}
        </main>
    )
}

export default Main; 