import React from 'react'

const JadwalCard = ({matkul,waktu,ruangan}) => {
    return (
        <>
            <div className="flex justify-between mt-2 text-white font-medium">
                <div>{matkul}</div>
                <div>{waktu}</div>
                <div className="font-semibold">{ruangan}</div>
            </div>
        </>
    )
}

export default JadwalCard