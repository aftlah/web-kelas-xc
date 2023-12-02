import React from 'react'

const InputCard = ({Type,onChange,value}) => {
  return (
    <>
     <div className='bg-white my-4 flex flex-col  rounded-lg '  >
          <label htmlFor={Type} className='font-bold text-secondary'>{Type}</label>
          <input onChange={onChange} type="text" id={Type} value={value} className='p-2 border-secondary border-2 sm:border-[3px] rounded-lg' placeholder={`Masukan ${Type} Anda`}/>
        </div>
    </>
  )
}

export default InputCard