import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectDetails, selectSelectedDetails, setIsDetails } from './detailsSlice'

const Details = () => {
  const dispatch = useDispatch()
  const details = useSelector(selectSelectedDetails)
  console.log(details)
  return (
    <Fragment>
      <p onClick={() => dispatch(setIsDetails(false))}>Back</p>
      <h1>Details</h1>
      <img src={details.picture.large} alt="" />
      <table>
        <tbody>
          <tr>
            <td>{details.location.street.number} {details.location.street.name}</td>
            <td>{details.location.state}</td>
            <td>{details.location.postcode}</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  )
}

export default Details
