import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  numOfCakes: number
}
const initialState: InitialState = {
  numOfCakes: 20
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state:InitialState) => {
      state.numOfCakes--
    },
    restocked: (state:InitialState, action: PayloadAction<number>) => {
      state.numOfCakes += action.payload
    }
  }
})

export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions
