import React, { useState } from 'react'
import { Data } from './component/Data'
import Nav from './component/Nav'
import Cards from './component/Cards'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import AjouteCard from './Ajoutecard'
function App () {
  const [cards, setCards] = useState(Data)

  const addCard = (newCard) => {
    setCards([...cards, newCard])
  }
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  const [rate, setRate] = useState(0)
  const handleRate = (x) => { setRate(x) }
return (
    <div className='App'>
      <Nav handleSearch={handleSearch} handleRate={handleRate} />
      <AjouteCard addCard={addCard} />
      <Cards cards={cards} search={search} rate={rate} />
    </div>
  )
}

export default App
