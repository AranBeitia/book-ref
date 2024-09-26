import { configureStore } from '@reduxjs/toolkit'
import books from './books/bookSlice'
import genres from './genres/genresSlice'

export const store = configureStore({
	reducer: {
		books,
		genres,
	},
})
