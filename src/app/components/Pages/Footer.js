import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Footer = () => {
  return (
    <>
      <div className='w-full  py-6 px-5 mt-10 text-white bg-secondary h-[23rem]'>
        <div>
          <Image src='/images/logo-putih.png' alt='logo' width={200} height={200} className='w-24 h-auto '/>
          <div className='text-[0.8rem] font-medium mt-4'>
            <div>Copyright © Kelas XC 2023</div>
            <div>Made With ❤️</div>
          </div>
        </div>
        <div className='mt-6 flex gap-x-11 justify-between'>
          <div>
            <h1 className='text-xl font-bold'>Kontributor</h1>
            <div className='flex flex-col text-xs gap-y-2 mt-1'>
              <Link href='https://www.instagram.com/aftlah/' target='_blank'>@afltah</Link>
              <Link href='https://www.instagram.com/nerdy.dandy/' target='_blank'>@nerdy.dandy</Link>
              <Link href='https://www.instagram.com/fardias1/' target='_blank'>@fardias1</Link>
            </div>
          </div>
          <div>
            <h1 className='text-xl font-bold'>Location</h1>
            <p className='text-xs'>Universitas Budi Luhur, Jl Ciledug
              raya No.1C, Petukangan utara, Kota
              Jakarta Selatan.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
