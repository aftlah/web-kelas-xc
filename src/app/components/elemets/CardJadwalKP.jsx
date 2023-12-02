import React from 'react'

const CardJadwalKP = ({hari,tanggal, matkul, waktu, ruangan }) => {
    return (
        <>
            <div className="bg-secondary pb-6 rounded-xl mt-3 p-4 shadow-xl">
                <div className="text-white text-2xl font-bold">{hari} <span className="text-sm ml-2">{tanggal}</span></div>
                <div className="flex justify-between mt-5 text-white font-medium">
                    <div className='w-[12rem] '>{matkul}</div>
                    <div className='w-[10rem] sm:w-[12rem] text-center border-x-2 flex flex-wrap '><span className='inline-block m-auto px-1'>{waktu}</span></div>
                    <div className="font-semibold w-[5rem] flex flex-wrap text-center"><span className='inline-block m-auto '>{ruangan}</span></div>
                </div>
            </div>
        </>
    )
}

export default CardJadwalKP