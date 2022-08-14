import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from '../features/cake/cakeSlice'

export const CakeView = () => {
  const numberOfCakes = useSelector((state) => state.cake.numOfCakes)
  const dispatch = useDispatch()

  return (
    <>
        <h2>Cakes QTY: {numberOfCakes}</h2>
        <div className='cake-btns-wrap'>
          <button onClick={() => dispatch(ordered())}>Sell Cake</button>
          <button onClick={() => dispatch(restocked(5))}>Restock Cake</button>  
        </div>    
    </>
  )
}
