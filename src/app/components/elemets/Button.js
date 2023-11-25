'use client'
import React from 'react'

const Button = ({ name,Type, }) => {
    return (
            <button
                type={Type}
                className="flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                {name}
            </button>
    )
}

export default Button