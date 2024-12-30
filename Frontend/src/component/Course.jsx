import React from 'react'
import list from "../../public/list.json"
import Cards from "./Cards"
import { Link } from "react-router-dom"

const Course = () => {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>here : )</span> </h1>
          <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi itaque repudiandae magnam iusto ipsa est! Placeat, repudiandae laboriosam incidunt quis, quam, nobis reprehenderit quo temporibus omnis architecto reiciendis sint commodi.
            Dolorum soluta velit deleniti aliquid a quasi neque non officiis, consectetur quae facere consequatur ut excepturi ratione inventore sit aut explicabo qui ipsam. Enim fuga rerum, nesciunt a voluptate laboriosam?
          </p>
          <Link to="/">
            <button className='bg-pink-500 text-white px-4 py-2 rounded-md mt-6 hover:bg-pink-700 duration-200'>
              Back
            </button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course;
