import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Header = () => {

    const uc = useContext(DataContext)

  return (
    <div>
      This is the Header section {uc}
    </div>
  )
}

export default Header
