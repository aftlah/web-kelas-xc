import React from 'react'
import Navbar from '../Pages/Navbar'

const CardTugas = ({ matkul, judulTugas, deadline }) => {
    return (
        <>
            <div className="w-4/5 mx-auto border mt-4 px-5 py-4 rounded-lg shadow bg-primary">
                <div>
                    <h5 className="mt-4 mb-1 pl-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{matkul}</h5>
                    <p className="mb-3 pl-1 font-normal text-white">{judulTugas}</p>
                    <p className='text-end font-extrabold text-white text-xs'>Batas : {deadline}</p>
                </div>
            </div>
            <Navbar />
        </>
    )
}

export default CardTugas