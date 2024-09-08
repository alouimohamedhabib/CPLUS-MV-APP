"use client"
import {memo, useState} from 'react'
import { useRouter } from 'next/navigation';
import { submitForm } from '@/app/actions/Auth';
import { MdMovieFilter } from 'react-icons/md';


function AuthForm () {
  
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      if(!formData.get('passCode')) return;
      const result = await submitForm(formData);
      if (result.success) {
        setError(null);
        router.push('/')
      }
      else setError(result.message)
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className='flex text-3xl justify-center items-center gap-2'>
      <MdMovieFilter className="text-4xl" /> <span className="mx-1 font-bold ">Cimena</span>
      </p>
     <h1 className='text-xl font-light py-10'>
      In order to access the content, please enter the passcode.
     </h1>
      <form onSubmit={handleSubmit} method='POST' className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label htmlFor="passCode" className="block text-gray-700 text-sm font-bold mb-2">Passcode</label>
          <input type="text" name="passCode"
            className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" />
        </div>
        <button type="submit" className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
          Submit
        </button>
      </form>
    </div>
  )
}


export default memo(AuthForm) 
