import { useEffect } from 'react'
import Book from './Book'
import AddBook from './AddBook'
import { useDispatch } from 'react-redux'
import { getAll } from '../../redux/books/bookSlice'
import { getAllGenres } from '../../redux/genres/genresSlice'

const BookList = () => {
	const dispatch = useDispatch()

	const fetchData = async () => {
		await dispatch(getAll())
		await dispatch(getAllGenres())
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<div>
			<h1>Book list</h1>
			<AddBook />
			<Book />
		</div>
	)
}
export default BookList
