import React from 'react';
import {WEBSITE_NAME, WEBSITE_DESC, WEBSITE_URL, BUTTON1, BUTTON2} from "./config.js"

const App = () => {
  return (
    <div>
        <h1 className='text-5xl my-5 mx-10 font-bold'>{WEBSITE_NAME}</h1>
        <p className='text-lg mx-10'>{WEBSITE_DESC}</p>

        <img src={WEBSITE_URL} alt="" className='mx-auto h-[450px] mt-5 w-[1450px] object-cover'/>

        <div className='flex justify-center'>
            <button className='bg-lime-900 m-5 px-4 py-1 rounded-lg text-white text-xl'>{BUTTON1}</button>
            <button className='bg-lime-900 m-5 px-4 py-1 rounded-lg text-white text-xl'>{BUTTON2}</button>
        </div>
    </div>
  )
}

export default App