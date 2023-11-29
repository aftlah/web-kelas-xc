import React from 'react'
import CardSeminar from '../elemets/CardSeminar'

const Seminar = () => {
    return (
        <>
            <div className='w-full  flex flex-col items-center sm:items-start sm:flex-row  sm:gap-x-4 sm:w-max sm:mr-40'>
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
                <CardSeminar image='/images/5.png' judul='Seminar 1'  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                </CardSeminar>
            </div>
        </>
    )
}

export default Seminar