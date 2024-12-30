import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';

const Contact = () => {
     const {
                register,
                handleSubmit,
                formState: { errors },
              } = useForm()
            
              const onSubmit = (data) => console.log(data);
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 py-4'>
                <div className=' flex flex-col mt-28 items-center justify-center'>
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                    <h2 className='font-bold text-2xl text-start mt-4 space-y-2'>Contact Us</h2>
                    <div className='mt-4 space-y-2'>
                        <span>Name</span><br></br>
                        <input type='text'
                            placeholder='Enter your name'
                            className='w-80 px-3 border rounded-md outline-none py-1' />
                    </div>
                    <div className='mt-4 space-y-2'>
                        <span>Email</span><br></br>
                        <input type='email'
                            placeholder='Email address'
                            className='w-80 px-3 border rounded-md outline-none py-1' />
                     </div>

                     <div className='mt-4 space-y-2'>
                        <span>Message</span><br></br>
                        <textarea type='text'
                            placeholder='Type your message here...'
                            className='w-80 px-3 border rounded-md outline-none py-1' />
                     </div>

                     <Link to="/" className='bg-blue-600 text-white py-2 px-4 rounded-lg mb-4 text-center'>Submit</Link>
                   </form>
                </div>
            </div>
        </>
    )
}

export default Contact
