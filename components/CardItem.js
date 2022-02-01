import Link from 'next/link'
import React from 'react'

export default function CardItem() {
  return (
    <section id='periksa' className='bg-blue-50'>
      <div className='container mx-auto py-20'>
        <h1 className='text-black text-3xl font-bold text-center'>
          Periksa Kesehatan anda
        </h1>
        <div className='flex flex-wrap justify-center items-center pt-5'>
          <div className='h-full p-6 m-4 relative bg-white hover:shadow-xl rounded-lg md:w-2/12 w-2/6'>
            <div className='mb-4'>
              <img
                className='inset-0 md:relative w-full h-full object-cover object-center'
                src='/img/obesity.svg'
                alt='Cek Gizi IMT'
              />
            </div>
            <p className='text-lg text-blue-900 font-semibold h-full text-center tracking-wider'>
              Gizi/IMT
            </p>
            <Link href='/gizi'>
              <a className='stretched-link cursor-pointer'></a>
            </Link>
          </div>
          <div className='h-full p-6 m-4 relative bg-white hover:shadow-xl rounded-lg md:w-2/12 w-2/6'>
            <div className='mb-4'>
              <img
                className='inset-0 md:relative w-full h-full object-cover object-center'
                src='/img/arm.svg'
                alt='Cek Hipertensi'
              />
            </div>
            <p className='text-lg text-blue-900 font-semibold h-full text-center tracking-wider'>
              Hipertensi
            </p>
            <Link href='/hipertensi'>
              <a className='stretched-link cursor-pointer'></a>
            </Link>
          </div>

          <div className='h-full p-6 m-4 relative bg-white hover:shadow-xl rounded-lg md:w-2/12 w-2/6'>
            <div className='mb-4'>
              <img
                className='inset-0 md:relative w-full h-full object-cover object-center'
                src='/img/blood-test.svg'
                alt='Cek Diabetes'
              />
            </div>
            <p className='text-lg text-blue-900 font-semibold h-full text-center tracking-wider'>
              Diabetes
            </p>
            <Link href='/diabetes'>
              <a className='stretched-link cursor-pointer'></a>
            </Link>
          </div>
          <div className='h-full p-6 m-4 relative bg-white hover:shadow-xl rounded-lg md:w-2/12 w-2/6'>
            <div className='mb-4'>
              <img
                className='inset-0 md:relative w-full h-full object-cover object-center'
                src='/img/analysis.svg'
                alt='Cek Riwayat Kesehatan  '
              />
            </div>
            <p className='text-blue-900 font-semibold h-full text-center tracking-wider'>
              Riwayat Kesehatan
            </p>
            <Link href='/riwayat-kesehatan'>
              <a className='stretched-link cursor-pointer'></a>
            </Link>
          </div>
        </div>
      </div>
      <div className='h-40'></div>
    </section>
  )
}
