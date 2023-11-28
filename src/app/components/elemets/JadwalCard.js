import React from 'react'

const JadwalCard = ({matkul,waktu,ruangan}) => {
    return (
        <>
            <div className="flex justify-between mt-5 text-white font-medium">
                <div className=' w-[8rem]   sm:m-0'>{matkul}</div>
                <div className='w-[10rem] sm:w-[12rem] flex text-center items-center flex-wrap border-x-2 '><span className='inline-block text-center  pl-1 pr-1 mx-auto'>{waktu}</span></div>
                <div className="font-semibold w-[5rem] text-center flex flex-wrap"><span className='inline-block m-auto '>{ruangan}</span></div>
            </div>
        </>
    )
}

export default JadwalCard