import React, { useState } from 'react'
import GameBoard from './components/GameBoard/GameBoard'
import Square from './components/Square/Square'
import Header from './components/Header/Header'
import { Button } from 'react-bootstrap'
import './App.css'


const App = () => {
  const [isPlayable, setIsPlayable] = useState(true)
  return (
    <>
      <Header />
      <Button className="button" >Start</Button>
      <GameBoard />

    </>
  )
}

export default App