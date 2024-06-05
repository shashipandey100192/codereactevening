import { configureStore } from '@reduxjs/toolkit'
import xyz from "./Myactions";

export const store = configureStore({
    reducer: {
        counter:xyz
    },
  })