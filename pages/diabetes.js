import Link from 'next/link'
import React, { Component } from 'react'
import Navigation from '../components/Navigation'

export default class Diabetes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gulaDarah: '',
      kolestrol: '',
      gulaDarahKategori: '',
      kolestrolKategori: '',

      errors: {
        gulaDarah: '',
        kolestrol: '',
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
        case 'gulaDarah':
          errors.gulaDarah =
            value.length < 3 ? 'Harap isi kolom dengan benar' : ''
          break
        case 'kolestrol':
          errors.kolestrol =
            value.length < 3 ? 'Harap isi kolom dengan benar' : ''
          break

        default:
          break
      }
      this.setState({ [id]: value })
    }
  }

  Categories() {
    const { gulaDarah, kolestrol } = this.state

    if (gulaDarah < 110) {
      this.setState({
        gulaDarahKategori: 'Normal',
      })
    } else if (110 >= gulaDarah < 200) {
      this.setState({
        gulaDarahKategori: 'Sedang',
      })
    } else if (gulaDarah >= 200) {
      this.setState({
        gulaDarahKategori: 'Buruk',
      })
    }

    if (kolestrol < 200) {
      this.setState({
        kolestrolKategori: 'Baik',
      })
    } else if (200 >= kolestrol < 240) {
      this.setState({
        kolestrolKategori: 'Sedang',
      })
    } else if (kolestrol >= 240) {
      this.setState({
        kolestrolKategori: 'Buruk',
      })
    }
  }

  async onClick(e) {
    e.preventDefault()

    await this.Categories()
  }
  render() {
    const {
      gulaDarah,
      kolestrol,
      gulaDarahKategori,
      kolestrolKategori,
      errors,
    } = this.state

    return (
      <>
        <Navigation />

        <section className='mx-auto bg-blue-50 flex justify-center items-center pb-40'>
          <div className='container max-w-md h-full pt-14'>
            <h1 className='text-3xl text-indigo-900 font-semibold mb-6'>
              Form Diabetes
            </h1>

            <div className='flex justify-between mb-4 '>
              <label for='gulaDarah' className='text-l mr-8 '>
                Gula Darah Sewaktu
              </label>
              <div className='w-2/4'>
                <input
                  type='number'
                  name='gulaDarah'
                  value={gulaDarah}
                  onChange={this.onChange.bind(this)}
                  id='gulaDarah'
                  className='border w-full border-gray-200 rounded-lg px-4 py-2 
              bg-white text-sm focus:border-blue-400 focus:outline-none'
                  placeholder='Gula Darah dalam mg/dl'
                  pattern='[0-9]{3}'
                />
                {errors.gulaDarah.length > 0 && (
                  <p className='text-red-500 text-sm'>{errors.gulaDarah}</p>
                )}
              </div>
            </div>
            <div className='flex justify-between mb-4 '>
              <label for='kolestrol' className='text-l mr-8 '>
                Kolestrol
              </label>
              <div className='w-2/4'>
                <input
                  type='number'
                  name='Kolestrol'
                  value={kolestrol}
                  onChange={this.onChange.bind(this)}
                  id='kolestrol'
                  className='border w-full border-gray-200 rounded-lg bg-white  px-4 py-2 
              text-sm focus:border-blue-400 focus:outline-none'
                  placeholder='Kolestrol dalam mg/dl'
                  pattern='[0-9]{3}'
                />

                {errors.kolestrol.length > 0 && (
                  <p className='text-red-500 text-sm'>{errors.kolestrol}</p>
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
                disabled={kolestrol === '' || gulaDarah === '' ? true : false}>
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

            {gulaDarahKategori !== '' && kolestrolKategori !== '' && (
              <div className='w-full bg-red-400 p-3 rounded-lg mb-4 '>
                <p className='font-lg text-white m-2 '>
                  Gula Darah anda adalah:{' '}
                  <span className='mt-3 font-semibold'>{gulaDarah} mg/dl</span>
                </p>
                <p className='font-lg text-white m-2'>
                  Kategori:{' '}
                  <span className='mt-3 font-semibold'>
                    {gulaDarahKategori}
                  </span>
                </p>
                <p className='font-lg text-white m-2 '>
                  Gula Darah anda adalah:{' '}
                  <span className='mt-3 font-semibold'>{kolestrol} mg/dl</span>
                </p>
                <p className='font-lg text-white m-2'>
                  Kategori:{' '}
                  <span className='mt-3 font-semibold'>
                    {kolestrolKategori}
                  </span>
                </p>
              </div>
            )}
          </div>
        </section>
      </>
    )
  }
}
