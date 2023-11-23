import React from 'react'

const InputCard = ({Type}) => {
  return (
    <>
     <div className='bg-white my-4 flex flex-col  rounded-lg '  >
          <label htmlFor={Type} className='font-bold text-secondary'>{Type}</label>
          <input type="text" id={Type} className='p-2 border-secondary border-2 rounded-lg' placeholder={`Masukan ${Type}`}/>
        </div>
    </>
  )
}

export default InputCard