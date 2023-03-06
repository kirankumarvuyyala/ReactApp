import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement, reset } from '../action/Action'
export default function Counter() {

	  const count = useSelector((state) => state.counter)

	  const dispatch = useDispatch()

	  return (
		<div>
		  <div>
			<button
			  aria-label="Increment value"
			  onClick={() => dispatch(increment())}
			>
			  Increment
			</button>
	
			<button
			  aria-label="Decrement value"
			  onClick={() => dispatch(decrement())}
			>
			  Decrement
			</button>
      <button 
			  aria-label="Decrement value"
			  onClick={() => dispatch(reset())}
			>
			  RESET
			</button>
      <br>
      </br>
      <span>{count}</span>
      
		  </div>
		</div>
	  )
	}

