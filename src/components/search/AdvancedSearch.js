import React, { useState, useEffect } from 'react';
import { Cascader, Form, Button } from 'antd';

import { getListAnime } from '../../api/anime';
import { genreList } from '../../services/auxServices';

import ListAnime from '../anime/ListAnime';

const AdvancedSearch = () => {

    const [form] = Form.useForm();
  	const [formLayout] = useState('inline');
	const [genders, setGenders] = useState('');
	const [loading, setLoading] = useState(true);
    const [animeList, setAnimeList] = useState([]);

	useEffect(() => {
		const genres = genreList();
		setGenders(genres);
	}, []);

    const onFinish = async (values) => {
		const gender = values.gender;

		setLoading(true);
		setLoading(false);
	};

	const restoreList = async() => {
		setLoading(true);
		const anime = await getListAnime();
		setAnimeList(anime);
		setLoading(false);
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
						<b style = {{ color: '#1890ff', textTransform: 'uppercase' }}> 
							Genres 
						</b> } 
					name = { 'gender' }
				>
					<Cascader
						placeholder = { '' } 
						options = { genders } 
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
				list = { animeList } loading = { loading } search = { true } 
				message = 'Waiting For Search ...'
			/>
		</>
    )
};

export default AdvancedSearch;