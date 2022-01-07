import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchDetails5000 = createAsyncThunk(
  'details/randomUser5000',
  async () => {
    const response = await fetch('https://randomuser.me/api/?results=5000')
    return await response.json()
  }
)

export const fetchDetails2000 = createAsyncThunk(
  'details/randomUser2000',
  async () => {
    const response = await fetch('https://randomuser.me/api/?results=2000')
    return await response.json()
  }
)

export const detailSlice = createSlice({
  name: 'details',
  initialState: {
    details: [],
    isDetails: false,
    selectedDetails: {},
    response5000: [],
    response2000: []
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setIsDetails: (state, action) => {
      state.isDetails = action.payload
    },
    setSelectedDetails: (state, action) => {
      state.details.forEach((detail) => {
        if (detail.id === action.payload) {
          state.selectedDetails = detail
        }
      })
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDetails5000.fulfilled, (state, action) => {
      action.payload.results.map(row => {
        const lastId = getLastId(state.details)
        row.id = lastId
        state.details.push(row)
      })
    })
    builder.addCase(fetchDetails2000.fulfilled, (state, action) => {
      action.payload.results.map(row => {
        const lastId = getLastId(state.details)
        row.id = lastId
        state.details.push(row)
      })
    })
  }
})

const getLastId = (rows) => {
  let lastId
  if (!rows[rows.length - 1]) {
    lastId = 0
  } else {
    lastId = rows[rows.length - 1].id
  }
  return lastId
}

export const { setIsDetails, setSelectedDetails } = detailSlice.actions

export const selectDetails = state => state.details.details
export const selectIsDetails = state => state.details.isDetails
export const selectSelectedDetails = state => state.details.selectedDetails

export default detailSlice.reducer
