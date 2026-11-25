import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: 'user',
    initialState: {name: '유비', age: 20},
    reducers: {
        changeName(state){
            state.name = '관우'
        },      
        // state 변경함수를 action이라고 함
        increase(state, action){
            state.age += action.payload
            //payload : 파라미터 전송해주는 기능
        }
    }
})

export const { changeName, changeName2, increase } = user.actions;

export default user.reducer;