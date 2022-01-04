
import React from "react";

export default function Main(props) {
    const [character, setCharacter] = React.useState({
        class: props.charClass,
        hitDice: 0
    });

    React.useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/classes/${props.charClass}`)
        .then(data => data.json())
        .then(json => setCharacter(({
            class: json.name,
            hitDice: json.hit_die
        })))
    }, [props.charClass])

    console.log(character)

    return (
        <main className="main">
            Name: {character.class} <br />
            Dice: {character.hitDice}
        </main>
    )
}

