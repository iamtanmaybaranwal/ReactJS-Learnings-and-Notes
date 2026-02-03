import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

  const [data, setData] = useState([]) //useState basically apne scrren par laane ke liye use kiye hain hum

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list")
    setData(response.data)

    // console.log(data) //useState hata de toh hume data console pe milega
  }

  // useEffect(()=>{  useEffect se hum automatically cheejo ko call kr skte hain....
  //   getData()
  // }, [])

  return (
    <div className='p-15'>
      <button onClick={getData} className='bg-teal-700 px-10 py-8 text-white font-semibold text-2xl rounded active:scale-90'>Get Data</button>
      <div className='bg-gray-900 p-5 text-white rounded mt-5'></div>
      {data.map(function(elem,idx){
        return <div key={idx} className='bg-gray-300 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3 mt-2'>
         <img className='h-50 w-80' src={elem.download_url} alt="" />
         <h1>{elem.author}</h1>
        </div>
      })}
    </div>
  )
}

export default App