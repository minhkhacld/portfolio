import { createSlice } from "@reduxjs/toolkit";

export const Reducer = createSlice({
    name: 'Profilo',
    initialState: {
        isModalOpen: false,
        app: {},
    },
    reducers: {
        setModal: (state, action) => {
            state.isModalOpen = action.payload.isModalOpen;
            state.app = action.payload.app
        }
    }
})

export const { setModal } = Reducer.actions;
export default Reducer.reducer;