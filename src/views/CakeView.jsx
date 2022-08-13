import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from '../features/cake/cakeSlice'

export const CakeView = () => {
  const numberOfCakes = useSelector((state) => state.cake.numOfCakes)
  const dispatch = useDispatch()

  return (
    <>
      <h2>Number of Cakes: {numberOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Sell Cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock Cake</button>
    </>
  )
}
