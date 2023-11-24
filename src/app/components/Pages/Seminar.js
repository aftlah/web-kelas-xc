import React from 'react'
import CardSeminar from '../elemets/CardSeminar'

const Seminar = () => {
    return (
        <>
            <div className='mx-auto text-secondary text-xl mt-12 -mb-2  px-1 font-extrabold'>SEMINAR</div>
            <div className='w-full  flex flex-col items-center md:items-start'>
                <CardSeminar image='/images/5.png' judul='Seminar 1'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus voluptatum nesciunt voluptatem fugit eum, minima ducimus, quam iure modi cumque sequi natus repellat quas rem quaerat molestias. Voluptas, omnis ea.
                </CardSeminar>
                <CardSeminar image='/images/5.png' judul='Seminar 1'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus voluptatum nesciunt voluptatem fugit eum, minima ducimus, quam iure modi cumque sequi natus repellat quas rem quaerat molestias. Voluptas, omnis ea.
                </CardSeminar>
                <CardSeminar image='/images/5.png' judul='Seminar 1'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus voluptatum nesciunt voluptatem fugit eum, minima ducimus, quam iure modi cumque sequi natus repellat quas rem quaerat molestias. Voluptas, omnis ea.
                </CardSeminar>
            </div>
        </>
    )
}

export default Seminar