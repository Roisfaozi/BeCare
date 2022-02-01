import Link from 'next/link'
import React, { useState } from 'react'

export default function Navigation() {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }
  return (
    <header className='w-full z-50 px-4 bg-white'>
      <div className='container mx-auto py-4'>
        <div className='flex flex-stretch items-center'>
          <div className='w-56 flex items-center'>
            <p className='capitalize font-bold text-lg text-blue-900'>beCare</p>
          </div>
          <div className='w-full'></div>
          <button
            className='inline-flex p-3 rounded md:hidden text-blue-900 ml-auto z-20 outline-none'
            onClick={handleClick}>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
          <div className='w-auto'>
            {
              <ul
                className={`${
                  active ? '' : 'opacity-0 invisible'
                } fixed bg-white inset-0 flex flex-col items-center justify-center md:visible md:flex-row md:bg-transparent md:relative md:opacity-100`}>
                <li className='mx-3 md:py-0'>
                  <Link href='/gizi'>
                    <a className='text-blue-900 hover:font-medium hover:underline hover:text-blue-400'>
                      Gizi/IMT
                    </a>
                  </Link>
                </li>
                <li className='mx-3 md:py-0'>
                  <Link href='/hipertensi'>
                    <a className='text-blue-900 hover:font-medium hover:underline hover:text-blue-400'>
                      Hipertensi
                    </a>
                  </Link>
                </li>
                <li className='mx-3 md:py-0'>
                  <Link href='/diabetes'>
                    <a className='text-blue-900 hover:font-medium hover:underline hover:text-blue-400'>
                      Diabetes
                    </a>
                  </Link>
                </li>
                {/* <li className='mx-3 md:py-0'>
                  <Link href='/persebaran'>
                    <a className='text-blue-900 hover:font-medium hover:underline hover:text-blue-400'>
                      Persebaran
                    </a>
                  </Link>
                </li> */}
              </ul>
            }
          </div>
        </div>
      </div>
    </header>
  )
}
