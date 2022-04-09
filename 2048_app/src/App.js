import React, { useState } from 'react'
import GameBoard from './components/GameBoard/GameBoard'
import Square from './components/square/Square'
const App = () => {
  const [isPlayable, setIsPlayable] = useState(true)
  return (
    <>
      <GameBoard />
    </>
  )
}

export default App