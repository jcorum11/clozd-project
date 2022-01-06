import React, { Fragment, useEffect } from 'react'
import Table from '../features/Table/Table'
import Details from '../features/Details/Details'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsDetails, fetchDetails } from '../features/Details/detailsSlice'

const HomePage = () => {
  const dispatch = useDispatch()
  const isDetails = useSelector(selectIsDetails)
  useEffect(() => {
    for (let index = 0; index < 10; index++) {
      dispatch(fetchDetails(index))
    }
  }, [])
  return (
    <Fragment>
      {!isDetails ? <Table /> : <Details />}
    </Fragment>
  )
}

export default HomePage