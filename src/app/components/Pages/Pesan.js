'use client'
import React, { useEffect, useState } from 'react'
import InputCard from '../elemets/InputCard'

const Pesan = () => {
  const [nama,setNama] = useState('')
  const [nim,setNim] = useState('')
  const [textarea, setTextarea] = useState('')

  useEffect(() => {
    console.log(nama,nim,textarea);
  },[nama,nim,textarea])

  const onPesanSubmit = (e) => {
    e.preventDefault()
    console.log(nama,nim);
  }
  return (
    <>
      <h1 className='mt-10 px-1 font-black text-secondary text-xl'>KIRIM PESAN</h1>
      <form className='p-[.18rem]' onSubmit={onPesanSubmit}>
        <InputCard Type="Nama" onChange={(e) => setNama(e.target.value)} />
        <InputCard Type="Nim" onChange={(e) => setNim(e.target.value)}/>
        <div className='bg-white my-4 flex flex-col  rounded-lg '  >
          <label htmlFor="pesan" className='font-bold text-secondary'>Pesan</label>
          <textarea onChange={(e) => setTextarea(e.target.value)} type="text" id="pesan" rows="4" className='border-secondary border-2 rounded-lg p-2' placeholder="Masukan Pesan" />
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