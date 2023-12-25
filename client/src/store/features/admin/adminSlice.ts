import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../../axios"


interface initialStateInf {
    dealers : any,
    isLoading : boolean,
    error : string | null
}

const initialState : initialStateInf = {
    dealers : [],
    isLoading : false,
    error : null,
}

export const fetchDealers = createAsyncThunk(
    'content/fetchContent',
    async () => {
        const res = await axios.post("/dealer/getAllDealers")
        const data = await res.data
        return data
    }
)


const adminDealerSlice = createSlice({
        name: "admin",
        initialState,
        reducers : {
            changeCharge(state,action){
              const newData = state.dealers.map((data : any)=> {
                if (data.id == action.payload.id){
                  return { ...data,amount : action.payload.newAmount}
                }
                return data
              
              })
              state.dealers = newData
             },
             updateWorkingStatus(state,action){
              const newData = state.dealers.map((data : any)=> {
                if (data.id == action.payload.id){
                  return { ...data,working : action.payload.newWorking}
                }
                return data
              
              })
              state.dealers = newData
             },
             deleteDealer(state,action){
              // console.log()
              const newData = state.dealers.filter((data : any) => data.id !== action.payload)
              state.dealers = newData
             },
        },
        extraReducers: (builder) => {
            builder.addCase(fetchDealers.pending, (state) => {
              state.isLoading = true
            })
            builder.addCase(fetchDealers.fulfilled, (state, action) => {
              try{
                state.isLoading = false
                state.dealers = [...action.payload]
                state.error = null
              }catch(e){
                console.log(e,"EE")
              }
            })
            builder.addCase(fetchDealers.rejected, (state, action) => {
              state.isLoading = false
              console.log(action)
              state.error = action.error?.message || null
            })
          },
    })


export const { changeCharge,updateWorkingStatus,deleteDealer } = adminDealerSlice.actions

export const getDealers = (state : any) => state.admin.dealers 
export const getLoading = (state : any) => state.admin.isLoading 
export const getError = (state : any) => state.admin.error 

export default adminDealerSlice.reducer