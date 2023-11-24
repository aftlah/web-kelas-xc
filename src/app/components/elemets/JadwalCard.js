import React from 'react'

const JadwalCard = ({matkul,waktu,ruangan}) => {
    return (
        <>
            <div className="flex justify-between mt-5 text-white font-medium">
                <div className='w-[7.8rem] border-r-2'>{matkul}</div>
                <div className='w-[7rem] pr-2 border-r-2  '><span className='inline-block mt-[.7rem]'>{waktu}</span></div>
                <div className="font-semibold w-[4.2rem]  flex flex-wrap"><span className='inline-block m-auto '>{ruangan}</span></div>
            </div>
        </>
    )
}

export default JadwalCard