'use client'
import React, { useState } from 'react'
import Link from 'next/link'
// import Input from './components/Input'
import Button from '../components/elemets/Button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter()
  const [nim, setNim] = useState('')
  const [nama, setNama] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(nim, nama);
    localStorage.setItem("nama", nama)
    localStorage.setItem("nim", nim)


    router.push("/login");
  }


  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center mt-[6%] md:mt-0 px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image priority src="/images/logo.png" width={150} height={150} alt="tesdt" className='mx-auto w-40 h-auto' />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register Akun Anda
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="" onSubmit={handleSubmit} >
            {/* <Input namaInput={"Nama"} jenisInput={"nama"} />
            <Input namaInput={"Nim"} jenisInput={"nim"} /> */}
            <div className='mb-3'>
              <label htmlFor="nama" className="block text-sm font-medium leading-10 text-gray-900">
                Nama
              </label>
              <div>
                <input
                  onChange={(e) => setNama(e.target.value)}
                  id="nama"
                  placeholder="Masukan Nama"
                  name="nama"
                  type="text"
                  autoComplete="nama"
                  required
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className='mb-3'>
              <label htmlFor="nim" className="block text-sm font-medium leading-10 text-gray-900">
                Nim
              </label>
              <div>
                <input
                  onChange={(e) => setNim(e.target.value)}
                  id="nim"
                  placeholder="Masukan nim"
                  name="nim"
                  type="text"
                  autoComplete="nim"
                  required
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className='mt-8'>
              <Button name={"Register"} Type={"submit"} />
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