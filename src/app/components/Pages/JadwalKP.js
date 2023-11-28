'use client'
import React from 'react'
import CardJadwalKP from '../elemets/CardJadwalKP'

const JadwalKP = () => {
    const datas = [
        {
            id: 1,
            hari: "Senin",
            tanggal: "20-11-2003",
            matkul: "Analisis design dan algoritma",
            waktu: "10.40 - 12.30",
            ruangan: "4.3.3"
        },
        {
            id: 2,
            hari: "Senin",
            tanggal: "20-11-2003",
            matkul: "Pengantar Teknologi Informasi",
            waktu: "10.40 - 12.30",
            ruangan: "4.3.3"
        },
        {
            id: 3,
            hari: "Senin",
            tanggal: "20-11-2003",
            matkul: "Sistem Basis Data",
            waktu: "10.40 - 12.30",
            ruangan: "Lab Kom"
        },
    ]
    return (
        <>
            <h1 className='mt-12 px-1 font-black text-secondary text-xl sm:text-2xl'>KELAS PENGGANTI</h1>
            {
                datas.length > 0 ? (
                    datas.map((data) => (
                        <CardJadwalKP key={data.id} {...data} />
                    ))
                ) : (
                    <div className="bg-secondary rounded-xl mt-3 p-4">
                        <div className='text-white text-lg font-bold text-center'>Tidak Ada Kelas Pengganti</div>
                    </div>
                )
            }
        </>
    )
}

export default JadwalKP