import React from 'react'

const JadwalMatkul = () => {
  return (
    <>
    <h1 className='mt-10 px-1 font-black text-secondary text-xl'>JADWAL</h1>
    <div className="bg-primary h-32 rounded-xl mt-2 p-4">
        <div className="text-white text-2xl font-bold">Senin <span className="text-sm ml-2">20-11-2003</span></div>
        <div>
          <div className="flex justify-between mt-2 text-white font-medium">
            <div>Matkul</div>
            <div>Waktu</div>
            <div className="font-semibold">Ruangan</div>
          </div>
          <div className="flex justify-between mt-2 text-white font-medium">
            <div>Matkul</div>
            <div>Waktu</div>
            <div className="font-semibold">Ruangan</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default JadwalMatkul