import React from 'react'
import JadwalCard from '../elemets/JadwalCard'

const JadwalMatkul = () => {
  return (
    <>
      <h1 className='mt-10 px-1 font-black text-secondary text-xl sm:text-2xl'>JADWAL MATKUL</h1>
      <div className="bg-primary  rounded-xl mt-2 p-4 shadow-xl sm:text-start">
      <div className="text-white text-2xl font-bold">Senin <span className="text-sm ml-2">22-21-2022</span></div>
            <JadwalCard matkul="Analisis design dan algoritma" waktu="10.40 - 12.30" ruangan="4.3.3"/>
            <JadwalCard matkul="Pemrograman Dasar" waktu="10.40 - 12.30" ruangan="Lab Kom"/>
      </div>
    </>
  )
}

export default JadwalMatkul