/** @jsxImportSource @emotion/react */
import React, { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectSelectedDetails, setIsDetails } from './detailsSlice'
import { css } from '@emotion/react'

const Details = () => {
  const dispatch = useDispatch()
  const [isHighlighted, setIsHighlighted] = useState(false)
  const details = useSelector(selectSelectedDetails)
  let { picture, location, name, email, phone, dob } = details
  const { street, state, postcode, country } = location
  let date = new Date(dob.date)
  return (
    <Fragment>
      <span css={isHighlighted && highlight} onClick={() => dispatch(setIsDetails(false))} onMouseEnter={() => setIsHighlighted(true)} onMouseLeave={() => setIsHighlighted(false)}>&lt; Back</span>
      <h1>Details</h1>
      <img src={picture.large} alt="" />
      <p><span css={header}>Name: </span>{name.title} {name.first} {name.last}</p>
      <p><span css={header}>Email: </span>{email}</p>
      <p><span css={header}>Street: </span>{street.number} {street.name}</p>
      <p><span css={header}>City: </span>{state}</p>
      <p><span css={header}>Country: </span>{country}</p>
      <p><span css={header}>Postal Code: </span>{postcode}</p>
      <p><span css={header}>Phone Number: </span>{phone}</p>
      <p><span css={header}>Date of Birth: </span>{date.toDateString()}</p>
    </Fragment>
  )
}

const highlight = css`
background-color: yellow;
cursor: pointer;
`

const header = css`
font-weight: bold;
`

export default Details
