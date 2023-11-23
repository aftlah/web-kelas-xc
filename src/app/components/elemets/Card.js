import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({ image, judul, children }) => {
    return (
        <>
            <div className="max-w-sm border mt-6 p-5 border-gray-200 rounded-lg shadow bg-primary">
                <Image src={image} alt="" width={400} height={200} className='rounded-lg' />
                <div>
                    <h5 className="mt-4 mb-1 pl-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{judul}</h5>
                    <p className="mb-3 pl-1 font-normal text-white">{children}</p>
                    <Link href="#" className="inline-flex items-center px-4 py-3 text-sm text-center text-white bg-secondary rounded-xl font-extrabold">
                        Lihat lebih banyak
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Card