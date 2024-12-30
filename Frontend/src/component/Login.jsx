import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);
    return (
        <>
            <div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none">✕
                            </Link>
                        </form>
                        <h3 className="font-bold text-lg">Login</h3>
                        <div className='mt-6 space-y-2'>
                            <span>Email</span><br></br>
                            <input type='Email'
                                placeholder='Enter your email' className='w-80 px-3 border rounded-md outline-none py-1'
                                {...register("email", { required: true })} />
                            <br></br>
                            {errors.email && (<span className='text-sm text-red-500'>This field is required</span>)}
                        </div>

                        {/* Password input */}


                        <div className='mt-4 space-y-2'>
                            <span>
                            Password</span><br></br>
                            <input type='password'
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
                            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
                            <p>Not registered? {""}

                                <Link to="/signup" className='text-blue-500 cursor-pointer underline'
                                >SignUp
                                </Link>{" "}
                            </p>

                        </div>

                    </div>
                </dialog>

            </div>
        </>
    )
}

export default Login
