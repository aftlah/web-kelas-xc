import React from 'react'
import Link from 'next/link'
import Input from './components/Input'
import Button from '../components/elemets/Button'
import Image from 'next/image'

const page = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center mt-[6%] md:mt-0 px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image src="/images/logo.png" width={150} height={150} alt="tesdt" className='mx-auto' />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register Akun Anda
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="" action="#" method="">
            <Input namaInput={"Nama"} jenisInput={"nama"} />
            <Input namaInput={"Nim"} jenisInput={"nim"} />

            <div className='mt-8'>
              <Button name={"Register"} />
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Sudah Register?{' '}
            <Link href="/login" className="font-semibold leading-6 text-secondary hover:opacity-90">
              Kalau Sudah Silahkan Login
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default page