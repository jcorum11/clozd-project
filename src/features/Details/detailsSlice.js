import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchDetails = createAsyncThunk(
  'details/randomUser',
  async (index) => {
    const response = await fetch('https://randomuser.me/api/?inc=gender,name,location,email,picture')
    const data = [await response.json(), index]
    return data
  }
)

export const detailSlice = createSlice({
  name: 'details',
  initialState: {
    details: [],
    isDetails: false,
    selectedDetails: {}
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
    builder.addCase(fetchDetails.fulfilled, (state, action) => {
      const [response, index] = action.payload
      const details = response.results[0]
      details.id = index
      state.details.push(details)
    })
  }
})

export const { setIsDetails, setSelectedDetails } = detailSlice.actions

export const selectDetails = state => state.details.details
export const selectIsDetails = state => state.details.isDetails
export const selectSelectedDetails = state => state.details.selectedDetails

export default detailSlice.reducer
