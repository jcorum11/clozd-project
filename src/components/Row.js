import React, { Fragment, useEffect, useState } from 'react'
// import { Link, Outlet } from 'react-router-dom';

const Row = ({ handleClick, handleDetails }) => {
  const [details, setDetails] = useState({ gender: '', name: { title: '', first: '', last: '' }, email: '', location: { street: { number: NaN, name: '' }, state: '', city: '', postcode: NaN, country: '' } })

  useEffect(() => {
    fetch('https://randomuser.me/api/?inc=gender,name,location,email')
      .then(response => response.json())
      .then(data => {
        setDetails(data.results[0])
        const detailsCopy = JSON.parse(JSON.stringify(details))
        handleDetails(detailsCopy)
      })
  }, [])

  return (
    <Fragment>
      <tr>
        {/* <Link to={`/details/${details}`}> */}
        <td onClick={handleClick}>{details.name.title} {details.name.first} {details.name.last}</td>
        {/* </Link> */}
        <td>{details.email}</td>
        <td>{details.location.city}</td>
        <td>{details.location.country}</td>
      </tr>
      {/* <Outlet /> */}
    </Fragment>
  )
}

export default Row
