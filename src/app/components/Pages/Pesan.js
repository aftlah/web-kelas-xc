import React from 'react'
import InputCard from '../elemets/InputCard'

const Pesan = () => {
  return (
    <>
      <h1 className='mt-10 px-1 font-black text-secondary text-xl'>KIRIM PESAN</h1>
      <form className='p-[.18rem]'>
        <InputCard Type="Nama" />
        <InputCard Type="Nim" />
        <div className='bg-white my-4 flex flex-col  rounded-lg '  >
          <label htmlFor="pesan" className='font-bold text-secondary'>Pesan</label>
          <textarea type="text" id="pesan" rows="4" className='border-secondary border-2 rounded-lg p-2' placeholder="Masukan Pesan" />
        </div>
        <div className=" w-full rounded-xl bg-primary text-center py-2.5 px-4 font-bold text-xl text-white ">
          <button type="submit">
            Kirim
          </button>
        </div>
      </form>
    </>
  )
}

export default Pesan