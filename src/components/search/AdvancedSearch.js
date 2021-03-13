import React, { useState, useEffect } from 'react';
import { Cascader, Form, Button } from 'antd';

import { getListSearchGenre } from '../../api/anime';
import { genreList } from '../../services/auxServices';

import ListAnime from '../lists/ListAnime';

const AdvancedSearch = () => {

    const [form] = Form.useForm();
  	const [formLayout] = useState('inline');
	const [genres, setGenres] = useState('');
	const [loading, setLoading] = useState(true);
    const [animeList, setAnimeList] = useState([]);
	const [messageType, setMessageType] = useState('');

	useEffect(() => {
		const genres = genreList();
		setGenres(genres);
	}, []);

    const onFinish = async (values) => {
		const genre = values.gender;
		setLoading(true);
		const search = await getListSearchGenre('anime', genre[0]);
		setAnimeList(search);
		const valueGenre = genres.filter(function(genres) {
			return genres.value == genre[0];
		});
		setMessageType(`Anime List of ${ valueGenre[0].label }`);
		setLoading(false);
	};

	const restoreList = () => {
		setMessageType('Empty list, please search anything ...');
		setAnimeList([]);
	}

    return (
        <>
			<Form 
				layout = { formLayout } form = { form } initialValues = {{ layout: formLayout }}
				style = {{ paddingTop: '20px', margin: 'auto', width: 'auto', height: '100%', paddingLeft: '3%', textTransform: 'uppercase' }}
				onFinish = { onFinish }
			>
				<Form.Item 
					label = { 
						<b style = {{ color: '#1890ff' }}> 
							Genres 
						</b> } 
					name = { 'gender' } 
					rules = {[{
						required: true,
						message: 'Please, Select a Genre.',
					}]}
				>
					<Cascader
						placeholder = { '' } 
						options = { genres} 
						style = {{ width: '120px' }} 
					/>
				</Form.Item>
				<Form.Item>
					<Button 
						block htmlType = 'submit' style = {{ color: '#1890ff',background: 'black', textTransform: 'uppercase' }}> 
						<b> Apply </b> 
					</Button>
				</Form.Item>
				<Form.Item>
					<Button 
						block style = {{ color: '#1890ff',background: 'black', 
						textTransform: 'uppercase' }} 
						onClick={() => { { form.resetFields()}; restoreList() }}> 
						<b> Restore </b> 
					</Button>
				</Form.Item>
			</Form>
			<ListAnime 
				animeList = { animeList } loading = { loading } 
				messageType = { messageType }
				message = 'Waiting For Search...'
			/>
		</>
    )
};

export default AdvancedSearch;