'use client'
import React, { useState } from 'react'
import InputCard from '../elemets/InputCard'
import Swal from 'sweetalert2'

const Pesan = () => {
  const [nama, setNama] = useState('')
  const [nim, setNim] = useState('')
  const [textarea, setTextarea] = useState('')

  const onPesanSubmit = (e) => {
    e.preventDefault()
    const data = {
      name: nama,
      nima: nim,
      pesan: textarea
    }
    Swal.fire({
      title: 'Pesan Berhasil Terkirim',
      text: 'Tararengkyu ',
      icon: 'success',
      confirmButtonColor: '#0891B2',
      confirmButtonText: 'Oke',
    })
    console.log(data);
    setNim('')
    setNama('')
    setTextarea('')
  }
  return (
    <>
      <h1 className='mt-10 px-1 font-black text-secondary text-xl sm:text-2xl'>KIRIM PESAN</h1>
      <form className='p-[.18rem]' onSubmit={onPesanSubmit}>
        <InputCard Type="Nama" onChange={(e) => setNama(e.target.value)}  value={nama}/>
        <InputCard Type="Nim" onChange={(e) => setNim(e.target.value)}  value={nim}/>
        <div className='bg-white my-4 flex flex-col  rounded-lg '  >
          <label htmlFor="pesan" className='font-bold text-secondary'>Pesan</label>
          <textarea onChange={(e) => setTextarea(e.target.value)} value={textarea} type="text" id="pesan" rows="4" className='border-secondary border-2 sm:border-[3px] rounded-lg p-2' placeholder="Masukan Pesan Anda" />
        </div>
        <button type="submit" className='w-full rounded-xl bg-primary text-center py-2.5 px-4 font-bold text-xl text-white'>
          Kirim
        </button>
      </form>
    </>
  )
}

export default Pesan