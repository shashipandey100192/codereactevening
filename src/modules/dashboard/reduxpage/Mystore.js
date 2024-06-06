import { configureStore } from '@reduxjs/toolkit'
import xyz from "./Myactions";
import Customaction from './Customaction';

export const store = configureStore({
    reducer: {
        counter:xyz,
        ecom:Customaction
    },
  })