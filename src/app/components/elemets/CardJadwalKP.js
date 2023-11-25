import React from 'react'

const CardJadwalKP = ({hari,tanggal, matkul, waktu, ruangan }) => {
    return (
        <>
            <div className="bg-secondary pb-6 rounded-xl mt-3 p-4 shadow-xl">
                <div className="text-white text-2xl font-bold">{hari} <span className="text-sm ml-2">{tanggal}</span></div>
                <div className="flex justify-between mt-5 text-white font-medium">
                    <div className='w-[9rem] border-r-2 '>{matkul}</div>
                    <div className='w-[8rem] text-center border-r-2 flex flex-wrap '><span className='inline-block m-auto px-1'>{waktu}</span></div>
                    <div className="font-semibold w-[4.2rem] flex flex-wrap"><span className='inline-block m-auto '>{ruangan}</span></div>
                </div>
            </div>
        </>
    )
}

export default CardJadwalKP