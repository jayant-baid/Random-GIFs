import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'

const App = () => {
  return (
    // background class is added in index.css
    <div className='w-full h-[100%] flex flex-col background'>
      <h1 className='bg-white rounded-lg text-center mt-[40px] mx-[25px] text-4xl font-bold px-10 py-2'>RANDOM GIFS</h1>
      <div className='flex flex-col items-center gap-y-10 mt-[30px]'>
        <Random />
        <Tag />
      </div>
    </div>
  )
}

export default App