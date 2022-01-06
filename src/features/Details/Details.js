 /** @jsxImportSource @emotion/react */
import React, { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectSelectedDetails, setIsDetails } from './detailsSlice'
import { css } from '@emotion/react'

const Details = () => {
  const dispatch = useDispatch()
  const [isHighlighted, setIsHighlighted] = useState(false)
  const details = useSelector(selectSelectedDetails)
  const { picture, location } = details
  const { street, state, postcode } = location
  return (
    <Fragment>
      <span css={isHighlighted && highlight} onClick={() => dispatch(setIsDetails(false))} onMouseEnter={() => setIsHighlighted(true)} onMouseLeave={() => setIsHighlighted(false)}>&lt; Back</span>
      <h1>Details</h1>
      <img src={picture.large} alt="" />
      <table>
        <tbody>
          <tr>
            <td>{street.number} {street.name}</td>
            <td>{state}</td>
            <td>{postcode}</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  )
}

const highlight = css`
background-color: yellow;
cursor: pointer;
`

export default Details
