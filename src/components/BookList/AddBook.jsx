import { useSelector, useDispatch } from 'react-redux'
import { Button, Form, InputNumber, Select, Input } from 'antd'
import { create } from '../../redux/books/bookSlice'

const AddBook = () => {
	const dispatch = useDispatch()
	const { Option } = Select
	const [form] = Form.useForm()
	const { genresList } = useSelector((state) => state.genres)

	const onFinish = (values) => {
		console.log('Received values of form: ', values)
		dispatch(create(values))
		form.resetFields()
	}

	return (
		<Form onFinish={onFinish} form={form}>
			<Form.Item label="Book Name" name="name">
				<Input placeholder="Book name" />
			</Form.Item>
			<Form.Item name="GenreId" label="Select Genres">
				<Select mode="multiple" placeholder="Please select genre">
					{genresList.map((genre) => (
						<Option key={genre.id} value={genre.id}>
							{genre.name}
						</Option>
					))}
					{/* <Option value="red">Red</Option>
					<Option value="green">Green</Option>
					<Option value="blue">Blue</Option> */}
				</Select>
			</Form.Item>
			<Form.Item label="Price">
				<Form.Item name="price" noStyle>
					<InputNumber />
				</Form.Item>
				<span className="ant-form-text"> €</span>
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	)
}

export default AddBook
