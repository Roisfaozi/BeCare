import Link from 'next/link'
import React, { Component } from 'react'
import Navigation from '../components/Navigation'

export default class Gizi extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beratBadan: '',
      tinggiBadan: '',
      lingkarPerut: '',
      umur: '',
      indeksMasaTubuh: '',
      kategori: '',
      errors: {
        beratBadan: '',
        tinggiBadan: '',
        lingkarPerut: '',
        umur: '',
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
        case 'beratBadan':
          errors.beratBadan =
            value.length < 2 ? 'Harap isi kolom dengan benar' : ''
          break
        case 'tinggiBadan':
          errors.tinggiBadan =
            value.length < 3 ? 'Harap isi kolom dengan benar' : ''
          break
        case 'lingkarPerut':
          errors.lingkarPerut =
            value.length < 2 ? 'Harap isi kolom dengan benar' : ''
          break
        case 'umur':
          errors.umur = value.length < 2 ? 'Harap isi kolom dengan benar' : ''
          break

        default:
          break
      }
      this.setState({ [id]: value })
    }
  }

  Categories() {
    const { indeksMasaTubuh } = this.state
    if (indeksMasaTubuh < 17) {
      this.setState({
        kategori: 'Sangat Kurus',
      })
    } else if (indeksMasaTubuh >= 17 && indeksMasaTubuh < 18.5) {
      this.setState({
        kategori: 'Kurus',
      })
    } else if (indeksMasaTubuh === 22.1) {
      this.setState({
        kategori: 'Ideal',
      })
    } else if (indeksMasaTubuh >= 18.5 && indeksMasaTubuh < 25.09) {
      this.setState({
        kategori: 'Normal',
      })
    } else if (indeksMasaTubuh >= 25.1 && indeksMasaTubuh < 27) {
      this.setState({
        kategori: 'Gemuk',
      })
    } else if (indeksMasaTubuh > 27) {
      this.setState({
        kategori: 'Obesitas',
      })
    }
  }

  async onClick(e) {
    e.preventDefault()

    const { tinggiBadan, beratBadan } = this.state
    const TB = tinggiBadan / 100
    const BB = beratBadan

    const imt = BB / (TB * TB)

    await this.setState({
      indeksMasaTubuh: parseFloat(imt).toFixed(2),
    })
    await this.Categories()
  }
  render() {
    const {
      beratBadan,
      tinggiBadan,
      lingkarPerut,
      umur,
      errors,
      indeksMasaTubuh,
      kategori,
    } = this.state

    return (
      <>
        <Navigation />

        <section className='mx-auto bg-blue-50 flex justify-center items-center'>
          <div className='container max-w-md h-full py-14'>
            <h1 className='text-3xl text-indigo-900 font-semibold mb-6'>
              Form Gizi/ IMT
            </h1>

            <div className='flex justify-between mb-4 '>
              <label htmlFor='beratBadan' className='text-l mr-8 '>
                Berat Badan
              </label>
              <div className='w-2/4'>
                <input
                  type='text'
                  name='Berat Badan'
                  value={beratBadan}
                  onChange={this.onChange.bind(this)}
                  id='beratBadan'
                  className='border w-full border-gray-200 rounded-lg px-4 py-2 
              bg-white text-sm focus:border-blue-200 focus:outline-none'
                  placeholder='Berat Badan dalam KG'
                  maxLength='3'
                  pattern='[0-9]{3}'
                />
                {errors.beratBadan.length > 0 && (
                  <p className='text-red-500 text-sm'>{errors.beratBadan}</p>
                )}
              </div>
            </div>
            <div className='flex justify-between mb-4 '>
              <label htmlFor='tinggiBadan' className='text-l mr-8 '>
                Tinggi Badan
              </label>
              <div className='w-2/4'>
                <input
                  type='text'
                  name='Tinggi Badan'
                  value={tinggiBadan}
                  onChange={this.onChange.bind(this)}
                  id='tinggiBadan'
                  className='border w-full border-gray-200 rounded-lg bg-white  px-4 py-2 
              text-sm focus:border-blue-200 focus:outline-none'
                  placeholder='Tinggi Badan dalam CM'
                  maxLength='3'
                  pattern='[0-9]{3}'
                />

                {errors.tinggiBadan.length > 0 && (
                  <p className='text-red-500 text-sm'>{errors.tinggiBadan}</p>
                )}
              </div>
            </div>
            <div className='flex justify-between mb-4 '>
              <label htmlFor='lingkarPerut' className='text-l mr-8 '>
                Lingkar Perut
              </label>
              <div className='w-2/4'>
                <input
                  type='text'
                  name='Lingkar Perut'
                  value={lingkarPerut}
                  onChange={this.onChange.bind(this)}
                  id='lingkarPerut'
                  className='border w-full border-gray-200 rounded-lg bg-white text-sm  px-4 py-2 
                focus:border-blue-400 focus:outline-none '
                  placeholder='Lingkar Perut dalam CM'
                  maxLength='3'
                  pattern='[0-9]{3}'
                />
                {errors.lingkarPerut.length > 0 && (
                  <p className='text-red-500 text-sm'>{errors.lingkarPerut}</p>
                )}
              </div>
            </div>

            <div className='flex justify-between mb-8'>
              <label htmlFor='umur' className='text-l mr-8 '>
                Umur
              </label>
              <div className='w-2/4'>
                <input
                  type='text'
                  name='Umur'
                  value={umur}
                  onChange={this.onChange.bind(this)}
                  id='umur'
                  className='border w-full border-gray-200 rounded-lg  bg-white  px-4 py-2 
              text-sm focus:border-blue-400 focus:outline-none'
                  placeholder='Umur'
                  maxLength='3'
                  pattern='[0-9]{3}'
                />
                {errors.umur.length > 0 && (
                  <p className='text-red-500 text-sm'>{errors.umur}</p>
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
                disabled={
                  beratBadan === '' ||
                  tinggiBadan === '' ||
                  lingkarPerut === '' ||
                  umur === ''
                    ? true
                    : false
                }>
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

            {indeksMasaTubuh >= 1 && (
              <div className='w-full bg-red-400 p-3 rounded-lg'>
                <p className='font-lg text-white  '>
                  IMT anda adalah:{' '}
                  <span className='mt-3 font-semibold'>{indeksMasaTubuh} </span>
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
