import React from 'react'
import Image from 'next/image'

const Seminar = () => {
    return (
        <>
            <div className='text-secondary text-xl mt-10 px-1 font-extrabold'>SEMINAR</div>
            
            <div className="max-w-sm border mt-3 p-3 border-gray-200 rounded-lg shadow bg-primary">
                <a href="#">
                    <Image src="/images/5.png" alt="" width={400} height={200} className='rounded-lg' />
                </a>
                <div>
                    <h5 className="my-2 pl-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Judul</h5>
                    <p className="mb-3 pl-1 font-normal text-white">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore</p>
                    <a href="#" className="inline-flex items-center px-4 py-3 text-sm text-center text-white bg-secondary rounded-xl font-extrabold">
                        Lihat lebih banyak
                    </a>
                </div>
            </div>

        </>
    )
}

export default Seminar