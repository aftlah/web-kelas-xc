import React from 'react'
import JadwalCard from '../elemets/JadwalCard'

const JadwalMatkul = () => {
  return (
    <>
      <h1 className='mt-10 px-1 font-black text-secondary text-xl'>JADWAL</h1>
      <div className="bg-primary  rounded-xl mt-2 p-4 shadow-xl">
        <div className="text-white text-2xl font-bold">Senin <span className="text-sm ml-2">20-11-2003</span></div>
            <JadwalCard matkul="Andal" waktu="10.40 - Selesai" ruangan="4.3.3"/>
            <JadwalCard matkul="Andal" waktu="10.40 - Selesai" ruangan="4.3.3"/>
            <JadwalCard matkul="Andal" waktu="10.40 - Selesai" ruangan="4.3.3"/>
      </div>
    </>
  )
}

export default JadwalMatkul