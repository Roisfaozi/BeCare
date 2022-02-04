import Link from 'next/link'
import React, { Component } from 'react'
import ReactHTMLDatalist from 'react-html-datalist'
import Navigation from '../components/Navigation'

const options = [
  { text: 'Ya', value: 'Ya' },
  { text: 'Tidak', value: 'Tidak' },
]
export default class RiwayatKesehatan extends Component {
  constructor(props) {
    super(props)
    this.state = {
      KJantung: '',
      KDiabetes: '',
      KHipertensi: '',
      KObesitas: '',
      KAlkohol: '',
      KRokok: '',
      rokok: '',
      alkohol: '',
      jantung: '',

      isDone: false,
      errors: {
        KJantung: '',
        KDiabetes: '',
        KHipertensi: '',
        KObesitas: '',
        KAlkohol: '',
        KRokok: '',
        rokok: '',
        alkohol: '',
        jantung: '',
      },
    }

    this.onChange = this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  onChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
    let errors = this.state.errors
    if (value === '') {
      switch (name) {
        case 'rokok':
          errors.rokok = value.length < 1 ? 'Harap isi kolom dengan benar' : ''
          break
        case 'jantung':
          errors.jantung =
            value.length < 1 ? 'Harap isi kolom dengan benar' : ''
          break
        case 'alkohol':
          errors.alkohol =
            value.length < 1 ? 'Harap isi kolom dengan benar' : ''
          break
        case 'KRokok':
          errors.KRokok = value.length < 1 ? 'Harap isi kolom dengan benar' : ''
          break
        case 'KAlkohol':
          errors.KAlkohol =
            value.length < 1 ? 'Harap isi kolom dengan benar' : ''
          break
        case 'KObesitas':
          errors.KObesitas =
            value.length < 1 ? 'Harap isi kolom dengan benar' : ''
          break
        case 'KHipertensi':
          errors.KHipertensi =
            value.length < 1 ? 'Harap isi kolom dengan benar' : ''
          break
        case 'KJantung':
          errors.KJantung =
            value.length < 1 ? 'Harap isi kolom dengan benar' : ''
          break
        case 'KDiabetes':
          errors.KDiabetes =
            value.length < 1 ? 'Harap isi kolom dengan benar' : ''
          break

        default:
          break
      }
      this.setState({ [name]: value })
    }
  }

  async onClick(e) {
    e.preventDefault()

    const {
      KJantung,
      KDiabetes,
      KHipertensi,
      KObesitas,
      KAlkohol,
      KRokok,
      rokok,
      alkohol,
      jantung,
    } = this.state
    const value = {
      KJantung,
      KDiabetes,
      KHipertensi,
      KObesitas,
      KAlkohol,
      KRokok,
      rokok,
      alkohol,
      jantung,
    }

    await localStorage.setItem('riwayatKesehatan', JSON.stringify(value))
    this.setState({ isDone: true })
    this.setState({
      ...this.state,
      KJantung: '',
      KDiabetes: '',
      KHipertensi: '',
      KObesitas: '',
      KAlkohol: '',
      KRokok: '',
      rokok: '',
      alkohol: '',
      jantung: '',
    })
    setInterval(() => {
      this.setState({ isDone: false })
    }, 5000)
  }
  render() {
    const {
      isDone,
      KJantung,
      KDiabetes,
      KHipertensi,
      KObesitas,
      KAlkohol,
      KRokok,
      rokok,
      alkohol,
      jantung,
      errors,
    } = this.state
    return (
      <>
        <Navigation />

        <section className='mx-auto bg-blue-50 flex justify-center items-center pb-40'>
          <div className='container max-w-xl h-full pt-14'>
            <h1 className='text-3xl text-indigo-900 font-semibold mb-6'>
              Riwayat Kesehatan
            </h1>

            <div className='mb-4'>
              <label className='text-l mb-4' htmlFor='rokok'>
                {' '}
                Apakah Anda Merokok?{' '}
                <span className='font-bold'>(Ya/Tidak)</span>{' '}
              </label>
              <div className='my-4'>
                <ReactHTMLDatalist
                  id='rokok'
                  name={'rokok'}
                  onChange={this.onChange.bind(this)}
                  classNames={
                    'border w-full border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-400 focus:outline-none'
                  }
                  options={options}
                />
                {errors.rokok.length > 0 && (
                  <p className='text-red-500 text-sm'>{errors.rokok}</p>
                )}
              </div>
            </div>
            <div className='mb-4'>
              <label className='text-l mb-4' htmlFor='alkohol'>
                {' '}
                Apakah Anda Minum Alkohol?{' '}
                <span className='font-bold'>(Ya/Tidak)</span>{' '}
              </label>
              <div className='my-4'>
                <ReactHTMLDatalist
                  id='alkohol'
                  name={'alkohol'}
                  onChange={this.onChange.bind(this)}
                  classNames={
                    'border w-full border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-400 focus:outline-none'
                  }
                  options={options}
                />
                {errors.alkohol.length > 0 && (
                  <p className='text-red-500 text-sm'>{errors.alkohol}</p>
                )}
              </div>
            </div>
            <div className='mb-4'>
              <label className='text-l mb-4' htmlFor='alkohol'>
                {' '}
                Apakah Anda Memiliki Penyakit Jantung?{' '}
                <span className='font-bold'>(Ya/Tidak)</span>{' '}
              </label>
              <div className='my-4'>
                <ReactHTMLDatalist
                  id='jantung'
                  name={'jantung'}
                  onChange={this.onChange.bind(this)}
                  classNames={
                    'border w-full border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-400 focus:outline-none'
                  }
                  options={options}
                />
                {errors.jantung.length > 0 && (
                  <p className='text-red-500 text-sm'>{errors.jantung}</p>
                )}
              </div>
            </div>
            <div className='mb-4'>
              <label className='text-l mb-4' htmlFor='alkohol'>
                {' '}
                Apakah Anggota Keluarga Anda Memiliki Riwayat Penyakit Diabetes?{' '}
                <span className='font-bold'>(Ya/Tidak)</span>{' '}
              </label>
              <div className='my-4'>
                <ReactHTMLDatalist
                  id='KDiabetes'
                  name={'KDiabetes'}
                  onChange={this.onChange.bind(this)}
                  classNames={
                    'border w-full border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-400 focus:outline-none'
                  }
                  options={options}
                />
                {errors.KDiabetes.length > 0 && (
                  <p className='text-red-500 text-sm'>{errors.KDiabetes}</p>
                )}
              </div>
            </div>
            <div className='mb-4'>
              <label className='text-l mb-4' htmlFor='alkohol'>
                {' '}
                Apakah Anggota Keluarga Anda Memiliki Riwayat Penyakit
                Hipertensi? <span className='font-bold'>(Ya/Tidak)</span>{' '}
              </label>
              <div className='my-4'>
                <ReactHTMLDatalist
                  id='KHipertensi'
                  name={'KHipertensi'}
                  onChange={this.onChange.bind(this)}
                  classNames={
                    'border w-full border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-400 focus:outline-none'
                  }
                  options={options}
                />
                {errors.KHipertensi.length > 0 && (
                  <p className='text-red-500 text-sm'>{errors.KHipertensi}</p>
                )}
              </div>
            </div>
            <div className='mb-4'>
              <label className='text-l mb-4' htmlFor='alkohol'>
                {' '}
                Apakah Anggota Keluarga Anda Memiliki Riwayat Penyakit Jantung?{' '}
                <span className='font-bold'>(Ya/Tidak)</span>{' '}
              </label>
              <div className='my-4'>
                <ReactHTMLDatalist
                  id='KJantung'
                  name={'KJantung'}
                  onChange={this.onChange.bind(this)}
                  classNames={
                    'border w-full border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-400 focus:outline-none'
                  }
                  options={options}
                />
                {errors.KJantung.length > 0 && (
                  <p className='text-red-500 text-sm'>{errors.KJantung}</p>
                )}
              </div>
            </div>
            <div className='mb-4'>
              <label className='text-l mb-4' htmlFor='alkohol'>
                {' '}
                Apakah Anggota Keluarga Anda Memiliki Riwayat Penyakit Obesitas?{' '}
                <span className='font-bold'>(Ya/Tidak)</span>{' '}
              </label>
              <div className='my-4'>
                <ReactHTMLDatalist
                  id='KObesitas'
                  name={'KObesitas'}
                  onChange={this.onChange.bind(this)}
                  classNames={
                    'border w-full border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-400 focus:outline-none'
                  }
                  options={options}
                />
                {errors.KObesitas.length > 0 && (
                  <p className='text-red-500 text-sm'>{errors.KObesitas}</p>
                )}
              </div>
            </div>
            <div className='mb-4'>
              <label className='text-l mb-4' htmlFor='alkohol'>
                {' '}
                Apakah Anggota Keluarga Anda Ada Yang Merokok?{' '}
                <span className='font-bold'>(Ya/Tidak)</span>{' '}
              </label>
              <div className='my-4'>
                <ReactHTMLDatalist
                  id='KRokok'
                  name={'KRokok'}
                  onChange={this.onChange.bind(this)}
                  classNames={
                    'border w-full border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-400 focus:outline-none'
                  }
                  options={options}
                />
                {errors.KRokok.length > 0 && (
                  <p className='text-red-500 text-sm'>{errors.KRokok}</p>
                )}
              </div>
            </div>
            <div className='mb-4'>
              <label className='text-l mb-4' htmlFor='alkohol'>
                {' '}
                Apakah Anggota Keluarga Anda Ada Yang meminum Alkohol?{' '}
                <span className='font-bold'>(Ya/Tidak)</span>{' '}
              </label>
              <div className='my-4'>
                <ReactHTMLDatalist
                  id='KAlkohol'
                  name={'KAlkohol'}
                  onChange={this.onChange.bind(this)}
                  classNames={
                    'border w-full border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-400 focus:outline-none'
                  }
                  options={options}
                />
                {errors.KAlkohol.length > 0 && (
                  <p className='text-red-500 text-sm'>{errors.KAlkohol}</p>
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
                  KJantung === '' ||
                  KDiabetes === '' ||
                  KHipertensi === '' ||
                  KObesitas === '' ||
                  KAlkohol === '' ||
                  KRokok === '' ||
                  rokok === '' ||
                  alkohol === '' ||
                  jantung === ''
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
            {isDone && (
              <div className='w-full bg-red-400 p-3 rounded-lg'>
                <p className='font-lg text-white  '>
                  Data anda telah disimpan di browsers Silahkan kembali.
                </p>
              </div>
            )}
          </div>
        </section>
      </>
    )
  }
}
