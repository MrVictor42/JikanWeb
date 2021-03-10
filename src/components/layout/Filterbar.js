import React, { useState, useEffect } from 'react';
import { Cascader, Form, Button } from 'antd';
import axios from 'axios';

import { getListAnime, getAnimeDetailFromJikan } from '../../api/anime';

import ListAnime from '../anime/ListAnime';
import ListAnimeDay from '../anime/ListAnimeDay';

const Filterbar = () => {

	const [form] = Form.useForm();
  	const [formLayout] = useState('inline');
	const [genders, setGenders] = useState('');
	const [loading, setLoading] = useState(true);
    const [animeList, setAnimeList] = useState([]);
    const [visible, setVisible] = useState(true);

	useEffect(() => {
        syncLists();
    }, []);

	async function syncLists() {
		
		setLoading(true);
		const anime = await getListAnime();

		// const gendersForFilter = genders.data.map(function(gender) {
		// 	return {
		// 		value: gender.id,
		// 		label: gender.name
		// 	}
		// });
		// const databaseLength = await getCountDatabase();
		// let anime = null;
		// const apiJikanLength = await axios.get(apiListAnime);
		// if(databaseLength.data === 0 || databaseLength.data != apiJikanLength.data.anime.length) {
		// 	anime = await getListAnimeAfterUpdate();
		// } else {
		// 	anime = await getListAnime();
		// }

		// const genders = await getListGender();
		// const gendersForFilter = genders.data.map(function(gender) {
		// 	return {
		// 		value: gender.id,
		// 		label: gender.name
		// 	}
		// });

		setAnimeList(anime);
		// setGenders(gendersForFilter);
		setLoading(false);
	}

	const onFinish = async (values) => {
		const gender = values.gender;

		setLoading(true);
		setVisible(false);

		// if(gender !== undefined) {
		// 	const animeGender = await getListAnimeByGender(gender);
		// 	setAnimeList(animeGender.data);
		// } else {
		// 	const anime = await getListAnime();
		// 	setAnimeList(anime.data);
		// } 
		
		setLoading(false);
	};

	const restoreList = async() => {
		setLoading(true);
		const anime = await getListAnime();
		setAnimeList(anime.data);
		setLoading(false);
		setVisible(true);
	}

    return(
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
			<ListAnimeDay visible = { visible }/>
			<ListAnime list = { animeList } loading = { loading } />
		</>
	);
}

export default Filterbar;