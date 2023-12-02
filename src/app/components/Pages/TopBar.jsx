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
         <div className='mt-10 mb-12 font-bold sm:mt-[1.8rem]'>
            <div className='text-secondary text-center sm:text-start'>
               <div className='text-xl font-medium sm:text-2xl'>
                  SELAMAT DATANG
               </div>
               {
                  nama ? (
                     <div className='text-xl font-black mt-1 sm:text-2xl'>
                        {nama.toUpperCase()}
                     </div>
                  ) : (
                     <div className='text-xl font-extrabold mt-1 sm:text-2xl'> GUYS</div>
                  )
               }

            </div>
         </div>
      </>
   )
}

export default TopBar