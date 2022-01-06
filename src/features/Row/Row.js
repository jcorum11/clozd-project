 /** @jsxImportSource @emotion/react */
import React, { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectIsDetails, setIsDetails, setSelectedDetails } from '../Details/detailsSlice'
import { css } from '@emotion/react'

const Row = ({ details }) => {
  const dispatch = useDispatch()
  const isDetails = useSelector(selectIsDetails)
  const [isHighlighted, setIsHighlighted] = useState(false)
  const handleClick = (id) => {
    if (isDetails === false) {
      dispatch(setIsDetails(true))
    } else if (isDetails === true) {
      dispatch(setIsDetails(false))
    }
    dispatch(setSelectedDetails(id))
  }
  const { name, email, location, id } = details
  const { city, country } = location
  return (
    <Fragment>
      <tr css={isHighlighted && highlight} onClick={() => handleClick(id)} onMouseEnter={() => setIsHighlighted(true)} onMouseLeave={() => setIsHighlighted(false)}>
        <td>{name.title} {name.first} {name.last}</td>
        <td>{email}</td>
        <td>{city}</td>
        <td>{country}</td>
      </tr>
    </Fragment>
  )
}

const highlight = css`
background-color: yellow;
cursor: pointer;
`

export default Row
