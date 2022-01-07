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
    allDetails: [],
    isDetails: false,
    selectedDetails: {},
    currentDetails: [],
    currentDetailIndex: 0
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setIsDetails: (state, action) => {
      state.isDetails = action.payload
    },
    setSelectedDetails: (state, action) => {
      state.allDetails.forEach((detail) => {
        if (detail.id === action.payload) {
          state.selectedDetails = detail
        }
      })
    },
    addMoreDetails: (state, action) => {
      const currentDetails = state.allDetails.slice(state.currentDetailIndex, state.currentDetailIndex + action.payload)
      currentDetails.forEach(detail => {
        state.currentDetails.push(detail)
      })
      state.currentDetailIndex += action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDetails5000.fulfilled, (state, action) => {
      action.payload.results.map((row, index) => {
        row.id = index
        state.allDetails.push(row)
        if (index < 100) {
          state.currentDetails.push(row)
        }
      })
    })
    builder.addCase(fetchDetails2000.fulfilled, (state, action) => {
      action.payload.results.map((row, index) => {
        row.id = index + 5000
        state.allDetails.push(row)
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

export const { setIsDetails, setSelectedDetails, addMoreDetails } = detailSlice.actions

export const selectDetails = state => state.details.allDetails
export const selectIsDetails = state => state.details.isDetails
export const selectSelectedDetails = state => state.details.selectedDetails
export const selectCurrentDetails = state => state.details.currentDetails

export default detailSlice.reducer
