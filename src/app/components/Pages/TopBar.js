'use client'
import React, { useEffect, useState } from 'react'

const TopBar = () => {
   const [nama, setNama] = useState('')


   useEffect(() => {
      const namaSiswa = localStorage.getItem("nama")
      setNama(namaSiswa)
   }, [nama])
   return (
      <>
         <div className='mt-10 mb-12'>
            <div className='text-secondary text-center'>
               <div className='text-xl font-semibold'>
                  SELAMAT DATANG
               </div>
               {
                  nama ? (
                     <div className='text-xl font-extrabold mt-1'>
                        {nama.toUpperCase()}
                     </div>
                  ) : (
                     <div className='text-xl font-extrabold mt-1'> GUYS</div>
                  )
               }

            </div>
         </div>
      </>
   )
}

export default TopBar