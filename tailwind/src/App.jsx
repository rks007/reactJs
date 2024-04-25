import './App.css'

function App() {

  return (
    <>
      <div className=' flex justify-between'>
        <div className=' bg-red-400'>hi</div>
        <div className=' bg-green-500'>hi</div>
        <div className=' bg-green-600'>hi</div>
      </div>
      <br />

      <div className=' grid grid-cols-10 '>
        <div className=' bg-red-400 col-span-4'>hi there from first div</div>
        <div className=' bg-green-500 col-span-4'>hi there fromm the second div</div>
        <div className=' bg-green-600 col-span-2'>hi there from the third div</div>
      </div>
      <br />

      <div className=' bg-red-500 md:bg-blue-500 lg:bg-orange-500 xl:bg-pink-500'>
        checking tailwind mobile first approach
      </div>
      <br />

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        <div className='bg-green-500'>mercedes</div>
        <div className='bg-orange-500'>bmw</div>
        <div className='bg-purple-500'>audi</div>
      </div>

    </>

  
  )
}

export default App
