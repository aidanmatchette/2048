import React from 'react'
import './GameBoard.css'
import Square from '../Square/Square.js'

const GameBoard = () => {
  let allSquares = []
  for(let i = 0; i < 16; i++) {
    allSquares.push(<Square key={i} id={i + 1} className='gridbox' />)
  }
  return (
    <div className='board'>
      {allSquares}
    </div>
  )
}

export default GameBoard