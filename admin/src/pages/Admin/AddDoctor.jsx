import React from 'react'
import { assets } from '../../assets/assets'

const AddDoctor = () => {
  return (
    <form action="" className='m-5 w-full'>
      <p className='mb-3 text-lg font-medium'>Add Doctor</p>

      <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>

        <div className='flex items-center gap-4 mb-8 text-gray-500'>
          <label htmlFor="doc-img">
            <img src={assets.upload_area} alt="" className='w-16 bg-gray-100 rounded-full cursor-pointer' />
          </label>
          <input type="file" id="doc-img" hidden />
          <p>Upload doctor <br />picture</p>
        </div>


        <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600 '>
          <div className='w-full lg:flex-1 flex flex-col gap-4'>
            <div className='flex-1 flex flex-col gap-1'>
              <p>Your name</p>
              <input
                className='border rounded px-3 py-2'
                type="text" placeholder='Name' required />
            </div>

            <div className='w-full lg:flex-1 flex flex-col gap-1'>
              <p>Doctor Email</p>
              <input
                className='border rounded px-3 py-2'
                type="email" placeholder='Email' required />
            </div>

            <div className='w-full lg:flex-1 flex flex-col gap-1'>
              <p>Doctor Password</p>
              <input
                className='border rounded px-3 py-2'
                type="password" placeholder='password' />
            </div>

            <div className='w-full lg:flex-1 flex flex-col gap-1'>
              <p>Experience</p>
              <select className='border rounded px-3 py-2'>
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
                <option value="8 Year">8 Year</option>
                <option value="9 Year">9 Year</option>
                <option value="10 Year">10 Year</option>

              </select>
            </div>

            <div className='w-full lg:flex-1 flex flex-col gap-1'>
              <p>Fees</p>
              <input
                className='border rounded px-3 py-2'
                type="number" placeholder='fees' required />
            </div>

          </div>

          {/* another line switch  */}
          <div className='w-full lg:flex-1 flex flex-col gap-4'>

            <div className='w-full lg:flex-1 flex flex-col gap-1'>
              <p>Speciality</p>
              <select name=""
                className="border rounded px-3 py-2">
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className='w-full lg:flex-1 flex flex-col gap-1'>
              <p>Education</p>
              <input
                className='border rounded px-3 py-2'
                type="text" placeholder='Education' required />
            </div>

            <div className='w-full lg:flex flex flex-col gap-1'>
              <p>Address</p>
              <input className='border rounded px-3 py-2' type="text" placeholder='address 1' required />
              <input className='border rounded px-3 py-2' type="text" placeholder='address 2' />
            </div>

          </div>
        </div>

        <div className='w-full flex-1 gap-1 flex flex-col '>
          <p className='mt-4 mb-2'>About Doctor</p>
          <textarea
            className='w-full px-4 pt-2 rounded border'
            placeholder='write about doctor' rows={5} required />
        </div>
        <button className='bg-primary px-10 py-3 mt-4 text-white rounded-full'>Add Doctor</button>
      </div>
    </form>
  )
}

export default AddDoctor;