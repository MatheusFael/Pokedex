import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import SideNav from './components/SideNav'
import PokeCard from './components/PokeCard'


function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0)
  const [showSideMenu, setShowSideMenu] = useState(true)

  function handleToggleMenu() {
    setShowSideMenu(!showSideMenu)
  }

  function handleCloseMenu() {
    setShowSideMenu(true)
  }

  return (
    <>
      <Header handleToggleMenu={handleToggleMenu} />
      <SideNav  handleCloseMenu={handleCloseMenu} showSideMenu={showSideMenu} handleToggleMenu={handleToggleMenu} selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} />
      <PokeCard selectedPokemon={selectedPokemon} />

    </>
  )
}

export default App
