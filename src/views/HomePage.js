import React, { Fragment, useState } from 'react'
import Table from '../components/Table'
import Details from '../components/Details'

const HomePage = () => {
  const [isDetails, setIsDetails] = useState(false)
  const [personDetails, setPersonDetails] = useState({ gender: '', name: { title: '', first: '', last: '' }, email: '', location: { street: { number: NaN, name: '' }, state: '', city: '', postcode: NaN, country: '' } })
  const handleClick = () => {
    if (isDetails === false) {
      setIsDetails(true)
    } else if (isDetails === true) {
      setIsDetails(false)
    }
  }
  const handleDetails = (details) => {
    setPersonDetails(details)
  }
  return (
    <Fragment>
      {!isDetails ? <Table handleClick={handleClick} handleDetails={handleDetails}/> : <Details handleClick={handleClick} details={personDetails} />}
    </Fragment>
  )
}

export default HomePage