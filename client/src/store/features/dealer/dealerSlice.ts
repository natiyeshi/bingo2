import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../../axios"
import Cookies from "js-cookie";

interface initialStateInf {
    dealer : any,
    isLoading : boolean,
    error : string | null
}

const initialState : initialStateInf = {
    dealer : {},
    isLoading : false,
    error : null,
}

export const fetchDealer = createAsyncThunk(
    'content/fetchContent',
    async () => {
        const id = Cookies.get("access_token")
        const res = await axios.post("/dealer/getDealer/"+id)
        const data = await res.data
        return data
    }
)


const dealerSlice = createSlice({
        name: "dealer",
        initialState,
        reducers : {
            updateDealer(state,action){
                state.dealer = action.payload
             },
           
        },
        extraReducers: (builder) => {
            builder.addCase(fetchDealer.pending, (state) => {
              state.isLoading = true
            })
            builder.addCase(fetchDealer.fulfilled, (state, action) => {
              state.isLoading = false
              state.dealer = action.payload
              state.error = null

            })
            builder.addCase(fetchDealer.rejected, (state, action) => {
              state.isLoading = false
              state.error = action.error?.message || "something goes wrong"
            })
          },
    })


export const { updateDealer } = dealerSlice.actions

export const getDealer = (state : any) => state.dealer.dealer 
export const getDealerLoading = (state : any) => state.dealer.isLoading 
export const getDealerError = (state : any) => state.dealer.error 

export default dealerSlice.reducer