import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from '../features/icecream/icecreamSlice'

export const IceCreamView = () => {
  const [value, setValue] = useState(1)
  const amountOfIceCream = useSelector((state) => state.icecream.numOfIcecreams)
  const dispatch = useDispatch()

  return (
    <>
      <h2>Quantity of Ice Cream: {amountOfIceCream}</h2>
      <button onClick={() => dispatch(ordered())}>Sell Ice Cream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>Restock Ice Cream</button>
    </>
  )
}
