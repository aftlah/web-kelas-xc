import React from 'react'

const JadwalKP = () => {
    return (
        <>
            <h1 className='mt-10 px-1 font-black text-secondary text-xl'>KELAS PENGGANTI</h1>
            <div className="bg-secondary rounded-xl mt-3 p-4">
                <div className='text-white text-lg font-bold text-center'>Tidak Ada Kelas Pengganti</div>
            </div>
            <div className="bg-secondary rounded-xl mt-3 p-4">
                <div className="text-white text-2xl font-bold">Senin <span className="text-sm ml-2">20-11-2003</span></div>
                <div>
                    <div className="flex justify-between mt-2 text-white font-medium">
                        <div>Andal</div>
                        <div>10.40 - Selesai</div>
                        <div className="font-semibold">4.3.3</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JadwalKP