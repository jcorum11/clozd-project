import React, { Fragment } from 'react'

const Details = ({handleClick, details}) => {
  return (
    <Fragment>
      <p onClick={handleClick}>Back</p>
      <h1>Details</h1>
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
