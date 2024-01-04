import React from 'react'

function Button(props) {
  return (
    <div>
        <button  className='inline-flex items-center justify-center capitalize text-xl text-white rounded-lg px-6 py-3 duration-300 bg-yellow-400 hover:bg-yellow-500'>
            {props.title}
        </button>
    </div>
  )
}

export default Button