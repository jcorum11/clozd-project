import React, { Fragment, useEffect } from 'react'
import Table from '../features/Table/Table'
import Details from '../features/Details/Details'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsDetails, fetchDetails5000, fetchDetails2000 } from '../features/Details/detailsSlice'

const HomePage = () => {
  const dispatch = useDispatch()
  const isDetails = useSelector(selectIsDetails)
  useEffect(() => {
    dispatch(fetchDetails5000())
    dispatch(fetchDetails2000())
  }, [])
  return (
    <Fragment>
      {!isDetails ? <Table /> : <Details />}
    </Fragment>
  )
}

export default HomePage