import React from 'react'

const JadwalCard = ({matkul,waktu,ruangan}) => {
    return (
        <>
            <div className="flex justify-between mt-5 text-white font-medium">
                <div className=' w-[12rem]   sm:m-0'>{matkul}</div>
                <div className='w-[10rem]  items-center text-center border-x-2 flex flex-wrap '><span className='inline-block text-center  pl-1 pr-1 mx-auto'>{waktu}</span></div>
                <div className="font-semibold w-[5rem] text-center flex flex-wrap"><span className='inline-block m-auto '>{ruangan}</span></div>
            </div>
        </>
    )
}

export default JadwalCard