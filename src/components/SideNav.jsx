import {first151Pokemon, getFullPokedexNumber} from "../utils/index.js";
import { useState } from "react";

export default function SideNav(props){
    const {selectedPokemon, setSelectedPokemon, handleToggleMenu, showSideMenu, handleCloseMenu} = props
    const [searchValue, setSearchValue] = useState("")

    const filteredPokemon = first151Pokemon.filter((v, vIndex) => {
        if ((getFullPokedexNumber(vIndex)).includes(searchValue)) { return true }

        if (v.toLowerCase().includes(searchValue.toLowerCase())) { return true }
        return false

    })

    return(
        <nav  className={" " + (!showSideMenu ? "open" : "")}>
            <div className={"header " + (!showSideMenu ? "open" : "") }>
                <button  onClick={handleCloseMenu}  className="open-nav-button">
                    <i class="fa-solid fa-arrow-left-long"></i>
                </button>
                <h1 className="text-gradient">Pokédex</h1>
            </div>
            <input  placeholder="Example: 025 or Pikachu " value={searchValue} onChange={(e) =>{
                setSearchValue(e.target.value)
            }}  />

            {filteredPokemon.map((pokemon, pokemonIndex)=> {
                const trulypokemon = first151Pokemon.indexOf(pokemon)
                return (
                    <button onClick={()=>{
                        setSelectedPokemon(trulypokemon)
                        handleCloseMenu()
                    }} key={pokemonIndex} className={"nav-card " + (selectedPokemon === pokemonIndex ? "nav-card-selected" : " ")}>
                        <p>{getFullPokedexNumber(first151Pokemon.indexOf(pokemon))}</p>
                        <p>{pokemon}</p>
                    </button>
                )
            })}
        </nav>
    )
}