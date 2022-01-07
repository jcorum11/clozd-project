 /** @jsxImportSource @emotion/react */
import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { selectDetails } from '../Details/detailsSlice'
import Row from '../Row/Row'
import { css } from '@emotion/react'

const Table = () => {
  const details = useSelector(selectDetails)
  console.log(details)
  let key = 0
  const getKey = () => {
    key += 1
    return key.toString()
  }
  return (
    <Fragment>
      <h1>Home</h1>
      <table>
        <tbody>
          <tr>
            <td css={header}>Name</td>
            <td css={header}>Email</td>
            <td css={header}>City</td>
            <td css={header}>Country</td>
          </tr>
          {
            details.map((row) => {
              return <Row details={row} key={`detail-${getKey()}`} />
            })
          }
        </tbody>
      </table>
    </Fragment>
  )
}

const header = css`
font-weight: bold;
`

export default Table
