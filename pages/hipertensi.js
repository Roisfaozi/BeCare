import Link from 'next/link'
import React, { Component } from 'react'
import Navigation from '../components/Navigation'

export default class hipertensi extends Component {
  constructor(props) {
    super(props)
    this.state = {
      systole: '',
      diastole: '',
      kategori: '',

      errors: {
        systole: '',
        diastole: '',
      },
    }

    this.onChange = this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  onChange(e) {
    e.preventDefault()

    const { id, value } = e.target
    let errors = this.state.errors
    if (value <= 300) {
      switch (id) {
        case 'systole':
          errors.systole =
            value.length < 2 ? 'Harap isi kolom dengan benar' : ''
          break
        case 'diastole':
          errors.diastole =
            value.length < 2 ? 'Harap isi kolom dengan benar' : ''
          break

        default:
          break
      }
      this.setState({ [id]: value })
    }
  }

  Categories() {
    const { systole, diastole } = this.state
    if (systole < 90 && diastole < 60) {
      console.log(this.state)
      this.setState({
        kategori: 'Hypotensi',
      })
    } else if (
      systole >= 90 &&
      systole < 120 &&
      diastole >= 60 &&
      diastole < 80
    ) {
      this.setState({
        kategori: 'Optimal',
      })
    } else if (
      systole >= 120 &&
      systole < 130 &&
      diastole >= 80 &&
      diastole < 84
    ) {
      this.setState({
        kategori: 'Normal',
      })
    } else if (
      systole >= 130 &&
      systole < 140 &&
      diastole >= 85 &&
      diastole < 89
    ) {
      this.setState({
        kategori: 'Prehipertensi',
      })
    } else if (systole >= 140 && diastole >= 90) {
      this.setState({
        kategori: 'Hipertensi',
      })
    }
  }

  async onClick(e) {
    e.preventDefault()

    await this.Categories()
  }
  render() {
    const { systole, diastole, kategori, errors } = this.state

    return (
      <>
        <Navigation />

        <section className='mx-auto bg-blue-50 flex justify-center items-center pb-40'>
          <div className='container max-w-md h-full pt-14'>
            <h1 className='text-3xl text-indigo-900 font-semibold mb-6'>
              Form Hipertensi
            </h1>

            <div className='flex justify-between mb-4 '>
              <label for='systole' className='text-l mr-8 '>
                Systole
              </label>
              <div className='w-2/4'>
                <input
                  type='number'
                  name='Systole'
                  value={systole}
                  onChange={this.onChange.bind(this)}
                  id='systole'
                  className='border w-full border-gray-200 rounded-lg px-4 py-2 
              bg-white text-sm focus:border-blue-400 focus:outline-none'
                  placeholder='Systole dalam mmHg'
                  pattern='[0-9]{3}'
                />
                {errors.systole.length > 0 && (
                  <p className='text-red-500 text-sm'>{errors.systole}</p>
                )}
              </div>
            </div>
            <div className='flex justify-between mb-4 '>
              <label for='diastole' className='text-l mr-8 '>
                Diastole
              </label>
              <div className='w-2/4'>
                <input
                  type='number'
                  name='diastole'
                  value={diastole}
                  onChange={this.onChange.bind(this)}
                  id='diastole'
                  className='border w-full border-gray-200 rounded-lg bg-white  px-4 py-2 
              text-sm focus:border-blue-400 focus:outline-none'
                  placeholder='Diastole dalam mmHg'
                  pattern='[0-9]{3}'
                />

                {errors.diastole.length > 0 && (
                  <p className='text-red-500 text-sm'>{errors.diastole}</p>
                )}
              </div>
            </div>

            <div className='flex justify-between mb-8'>
              <button
                type='submit'
                className='bg-blue-400 text-white font-semibold focus:bg-blue-600 
                focus:outline-none w-full p-2 rounded-lg cursor-pointer text-l transition-all duration-200 
                disabled:bg-gray-300 disabled:cursor-auto'
                onClick={this.onClick.bind(this)}
                disabled={systole === '' || diastole === '' ? true : false}>
                Periksa
              </button>
              <Link href='/'>
                <button
                  className='text-white  bg-gray-400 w-full p-2 rounded-lg cursor-pointer text-l 
              transition-all duration-200 ml-8'>
                  <a>Kembali</a>
                </button>
              </Link>
            </div>

            {kategori !== '' && (
              <div className='w-full bg-red-400 p-3 rounded-lg'>
                <p className='font-lg text-white  '>
                  Tekanan darah anda anda adalah:{' '}
                  <span className='mt-3 font-semibold'>
                    {`${this.state.systole}/${this.state.diastole} mmHg`}{' '}
                  </span>
                </p>
                <p className='font-lg text-white'>
                  Kategori:{' '}
                  <span className='mt-3 font-semibold'>{kategori}</span>
                </p>
              </div>
            )}
          </div>
        </section>
      </>
    )
  }
}
