import { createSlice } from '@reduxjs/toolkit'

const positionsSlice = createSlice({
  name: 'positions',
  initialState: [],
  reducers: {
    addPositions: (_, action) => {
      return action.payload
    },
  },
})

export const { addPositions } = positionsSlice.actions
export const positionsReducer = positionsSlice.reducer

export const selectVisiblePositions = (state, filters = []) => {
  if (filters.length === 0) {
    return state.positions
  } else {
    return state.positions.filter((pos) => {
      const positionsFilters = [].concat(
        pos.role,
        pos.level,
        ...pos.languages,
        ...pos.tools
      )

      return filters.every((filters) => positionsFilters.includes(filters))
    })
  }
}
