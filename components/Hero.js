import React from 'react'

export default function Hero() {
  return (
    <section className='bg-blue-50'>
      <div className='container py-8 flex flex-col-reverse md:flex-row items-center h-full mx-auto'>
        <div className='z-20 inset-0 text-center md:text-left md:relative md:w-1/2 flex flex-col justify-center px-8 md:px-0'>
          <h1 className='text-indigo-900 text-3xl md:text-5xl leading-tight font-semibold capitalize'>
            beCare
          </h1>
          <h2 className='text-indigo-900 text-base md:text-lg my-6 tracking-wide'>
            BeCare adalah sebuah aplikasi berbasis web untuk mengidentifikasi
            kondisi kesehatan. Aplikasi ini dapat membantu anda untuk mencari
            tahu kondisi kesehatan anda seperti Diabetes, Obesitas dan kadar
            gula darah.
          </h2>
          <div>
            <button className='w-52 bg-blue-400 text-white hover:bg-blue-500 rounded-full px-8 py-3 mt-4 inline-block flex-none transition duration-200'>
              <a href='#periksa'>Periksa</a>
            </button>
          </div>
        </div>
        <div className='inset-0 md:relative md:w-1/2 md:ml-4 mt-6 md:mt-0'>
          <img
            src='/img/healthy_options.svg'
            alt='Medical Check adalah sebuah aplikasi berbasis web untuk
              mengidentifikasi kondisi kesehatan.'
            className='inset-0 md:relative w-full object-cover object-center'
          />
        </div>
      </div>
    </section>
  )
}
