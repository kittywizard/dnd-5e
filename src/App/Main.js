
import React from "react";

export default function Main(props) {
    console.log(props)
    const charDisplay = props.character;
    return (
        <main className="main">
            Name: {charDisplay.name} <br />
            Class: {charDisplay.playerClass} <br />
            Dice: {charDisplay.hitDice} <br/>
            Race: {charDisplay.race}
        </main>
    )
}

