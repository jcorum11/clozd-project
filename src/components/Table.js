import React, { Fragment } from 'react'
import Row from './Row'

const Table = ({ handleClick, handleDetails }) => {

  return (
    <Fragment>
      <h1>Home</h1>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>City</td>
            <td>Country</td>
          </tr>
          <Row handleClick={handleClick} handleDetails={handleDetails} />
        </tbody>
      </table>
    </Fragment>
  )
}

export default Table
