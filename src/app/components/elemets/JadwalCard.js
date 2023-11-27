import React from 'react'

const JadwalCard = ({matkul,waktu,ruangan}) => {
    return (
        <>
            <div className="flex justify-between mt-5 text-white font-medium">
                <div className=' w-[8rem] border-r-2 m-auto'>{matkul}</div>
                <div className='w-[7rem] flex text-center items-center flex-wrap border-r-2 '><span className='inline-block text-center  pl-1 pr-1 '>{waktu}</span></div>
                <div className="font-semibold w-[4.2rem] text-center flex flex-wrap"><span className='inline-block m-auto '>{ruangan}</span></div>
            </div>
        </>
    )
}

export default JadwalCard