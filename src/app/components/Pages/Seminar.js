import React from 'react'
import CardSeminar from '../elemets/CardSeminar'

const Seminar = () => {
    return (
        <>
            <div className='mx-auto text-secondary text-xl mt-12 -mb-2  px-1 font-extrabold sm:text-2xl'>SEMINAR</div>
            <div className='w-full  flex flex-col items-center sm:items-start sm:flex-row sm:overflow-auto sm:gap-x-4 sm:min-w-fit'>
                <CardSeminar image='/images/5.png' judul='Seminar 1' >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                </CardSeminar>
                <CardSeminar image='/images/5.png' judul='Seminar 1'  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                </CardSeminar>
                <CardSeminar image='/images/5.png' judul='Seminar 1'  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                </CardSeminar>
                <CardSeminar image='/images/5.png' judul='Seminar 1'  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                </CardSeminar>
                
            </div>
        </>
    )
}

export default Seminar