import React from 'react';

const initialState = {
    // username: null,
    watchHistory: [],
}

//reducer
export const userReducer = (state = initialState, action) => {
    switch(action.type){
        // case "CHANGE_USERNAME":
        //     return{
        //         ...state,
        //         username: action.payload,
        //     }
        
        case "UPDATE_WATCH_HISTORY": 
            let updatedHistory = state.watchHistory
            if(!state.watchHistory.includes(action.payload)){
                updatedHistory.unshift(action.payload)
            }else {
                let tempHistory = updatedHistory.filter(movie => movie.id  != action.payload.id)
                tempHistory.unshift(action.payload)
                updatedHistory = tempHistory
            }
            // const updatedHistory = state.watchHistory.push(action.payload)
            console.log(updatedHistory, ":: updated history")
            return {
                ...state,
                watchHistory: updatedHistory,
            }

        default:
            return state
    }
}

//action
// export const changeUserName = (name) => {
//     return{
//         type: "CHANGE_USERNAME",
//         payload: name
//     }
// }

export const updateWatchHistory = (movie) => {
    return {
        type: "UPDATE_WATCH_HISTORY",
        payload: movie
    }
}