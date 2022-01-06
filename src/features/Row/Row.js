import React, { Fragment, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectIsDetails, setIsDetails, setSelectedDetails } from '../Details/detailsSlice'
// import { Link, Outlet } from 'react-router-dom';

const Row = ({ details }) => {
  const dispatch = useDispatch()
  const isDetails = useSelector(selectIsDetails)
  const handleClick = (id) => {
    if (isDetails === false) {
      dispatch(setIsDetails(true))
    } else if (isDetails === true) {
      dispatch(setIsDetails(false))
    }
    dispatch(setSelectedDetails(id))
  }
  return (
    <Fragment>
      <tr>
        {/* <Link to={`/details/${details}`}> */}
        <td onClick={() => handleClick(details.id)}>{details.name.title} {details.name.first} {details.name.last}</td>
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
