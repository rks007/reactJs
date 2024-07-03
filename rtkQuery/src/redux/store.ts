import {configureStore} from "@reduxjs/toolkit"
import { myApi } from "./api"
import { myreducer } from "./reducer"

export const store = configureStore({
    reducer: {
        api: myApi.reducer,
        myReducer: myreducer.reducer
    },
    //you have to define middleware for rtk query to run
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(myApi.middleware),
})
