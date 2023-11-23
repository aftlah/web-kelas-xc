import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center mt-[10%] md:mt-0 px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register Akun Anda
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="nama" className="block text-sm font-medium leading-6 text-gray-900">
                Nama Lengkap
              </label>
              <div className="mt-2">
                <input
                  id="nama"
                  name="nama"
                  type="text"
                  autoComplete="nama"
                  required
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="nim" className="block text-sm font-medium leading-6 text-gray-900">
                  Nim
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="nim"
                  type="text"
                  autoComplete="current-nim"
                  required
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Sudah Register?{' '}
            <Link href="/login" className="font-semibold leading-6 text-secondary hover:text-indigo-500">
              Kalau Sudah Silahkan Login
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default page