 /** @jsxImportSource @emotion/react */
import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addMoreDetails, selectCurrentDetails } from '../Details/detailsSlice'
import Row from '../Row/Row'
import { css } from '@emotion/react'

const Table = () => {
  const dispatch = useDispatch()
  const details = useSelector(selectCurrentDetails)
  let key = 0
  const getKey = () => {
    key += 1
    return key.toString()
  }
  return (
    <Fragment>
      <h1>Home (Click "More" below!)</h1>
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
      <button onClick={() => dispatch(addMoreDetails(99))}>More</button>
    </Fragment>
  )
}

const header = css`
font-weight: bold;
`

export default Table
