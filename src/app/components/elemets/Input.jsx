import React from 'react'

const Input = ({namaInput,jenisInput,onChange,type}) => {
    return (
        <div className='mb-3'>
            <label htmlFor={jenisInput} className="block text-sm font-medium leading-10 text-gray-900">
                {namaInput}
            </label>
            <div>
                <input
                onChange={onChange}
                    id={jenisInput}
                    placeholder={`Masukan ${jenisInput}`}
                    name={jenisInput}
                    type={type}
                    autoComplete={jenisInput}
                    required
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    )
}

export default Input