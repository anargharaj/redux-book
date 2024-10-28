import { createSlice } from "@reduxjs/toolkit";
import { data } from "../Home/data";


const productSlice=createSlice({
    name:"products",
    initialState:data,
    reducers:{

        add:(state,action)=>{
            console.log(action)
            state.push(action.payload)
        },

        edit:(state,action)=>{
            const {id,name,cat,price}=action.payload
            const pro = state.find(product=>product.id==id)
            if(pro){
                pro.name=name;
                pro.cat=cat;
                pro.price=price
            }
            else{

            }
        },

        delet:(state,action)=>{
            const {id}=action.payload
            return state.filter(product=>product.id !==id)
            
        }
    }
})

export default productSlice.reducer;
export const {add,edit,delet}=productSlice.actions