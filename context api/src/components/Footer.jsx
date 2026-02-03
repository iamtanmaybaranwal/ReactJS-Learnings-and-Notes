import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Footer = () => {

    const data = useContext(DataContext)

  return (
    <div>
      This is footer section {data}
    </div>
  )
}

export default Footer
