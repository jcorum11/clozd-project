import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectDetails } from '../Details/detailsSlice'
import Row from '../Row/Row'

const Table = () => {
  const details = useSelector(selectDetails)
  let key = 0
  const getKey = () => {
    return (key += 1).toString()
  }
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
          {
            details.map((row) => {
              return <Row details={row} key={getKey} />
            })
          }
        </tbody>
      </table>
    </Fragment>
  )
}

export default Table
