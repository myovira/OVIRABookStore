import React from 'react'
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form"

const Signup = () => {
     const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm()
        
          const onSubmit = (data) => console.log(data);
    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <div className="w-[600px]">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none">✕</Link>
                      
                        <h3 className="font-bold text-lg">Sign-Up</h3>
                        <div className='mt-4 space-y-2'>
                            <span>Name</span><br></br>
                            <input type='text'
                                placeholder='Enter your name' 
                                className='w-80 px-3 border rounded-md outline-none py-1'
                                {...register("name", { required: true })} 
                                />
                        
                            <br></br>
                            {errors.name && 
                            (<span className='text-sm text-red-500'>
                            This field is required
                            </span>
                        )}
                        </div>


                        {/* email */}
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br/>
                            <input 
                            type='Email'
                            placeholder='Enter your email' 
                            className='w-80 px-3 border rounded-md outline-none py-1'
                            {...register("email", { required: true })} 
                            />
                            <br />
                            {errors.email && 
                            (<span className='text-sm text-red-500'>
                            This field is required
                            </span>
                            )}
                        </div>


                        {/* Password input */}
                        <div className='mt-4 space-y-2'>
                            <span>Password</span>
                            <br></br>
                            <input 
                            type='password'
                            placeholder='Enter your password' 
                            className='w-80 px-3 border rounded-md outline-none py-1' 
                            {...register("password", { required: true })} 
                            />
                            
                            <br></br>
                            {errors.password && 
                            (<span className='text-sm text-red-500'>
                                This field is required
                                </span>
                            )}
                        </div>


                        {/* Button */}
                        <div className='flex justify-around mt-6'>
                            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
                            <p>Already have account? {""}

                                <button className='text-blue-500 cursor-pointer underline'
                                onClick={()=> document.getElementById("my_modal_3").showModal()}>Login
                                </button>{" "}
                                <Login/>
                            </p>

                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;
