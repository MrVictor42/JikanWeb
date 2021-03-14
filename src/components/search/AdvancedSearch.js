import React, { useState, useEffect } from 'react';
import { Cascader, Form, Button, Radio } from 'antd';

import { getListSearchGenre } from '../../api/anime';
import { genreList } from '../../services/auxServices';

import ListAnime from '../lists/ListAnime';
import ListManga from '../lists/ListManga';

const types = [
	{ label: 'Anime', value: 'anime' },
	{ label: 'Manga', value: 'manga' },
];

const AdvancedSearch = () => {

    const [form] = Form.useForm();
  	const [formLayout] = useState('inline');
	const [genres, setGenres] = useState('');
	const [loading, setLoading] = useState(true);
    const [animeList, setAnimeList] = useState([]);
    const [mangaList, setMangaList] = useState([]);
	const [messageType, setMessageType] = useState('');
	const [type, setType] = useState();

	useEffect(() => {
		const genres = genreList();
		setType(type)
		setGenres(genres);
	}, []);

    const onFinish = async (values) => {
		let selectedType = values.type;
		if(selectedType === undefined) {
			selectedType = 'anime'; 
		}

		setType(selectedType);

		const genre = values.gender;
		setLoading(true);
		const search = await getListSearchGenre(selectedType, genre[0]);

		if(selectedType === 'anime') {
			setAnimeList(search);
		}else {
			setMangaList(search);
		}

		const valueGenre = genres.filter(function(genres) {
			return genres.value == genre[0];
		});
		setMessageType(`${ selectedType } List of ${ valueGenre[0].label }`);
		setLoading(false);
	};

	const restoreList = () => {
		setMessageType('Empty list, please search anything ...');
		setAnimeList([]);
		setMangaList([]);
	}

    return (
        <>
			<Form 
				layout = { formLayout } form = { form } initialValues = {{ layout: formLayout }}
				style = {{ paddingTop: '20px', margin: 'auto', width: 'auto', height: '100%', paddingLeft: '3%', textTransform: 'uppercase' }}
				onFinish = { onFinish }
			>
			<Form.Item name = 'type' value = { type }>
				<Radio.Group
					options = { types }  
					optionType = 'button' buttonStyle = 'solid'
					value = { type }
					style = {{ 
						color: '#1890ff', background: 'black', 
						paddingRight: '20px', fontWeight: 'bold' 
					}}
				/>
			</Form.Item>
			
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
						block htmlType = 'submit' style = {{ color: '#1890ff',
						background: 'black', textTransform: 'uppercase' }}> 
						<b> Apply </b> 
					</Button>
				</Form.Item>
				<Form.Item>
					<Button 
						block style = {{ color: '#1890ff',
						background: 'black', 
						textTransform: 'uppercase' }} 
						onClick={() => { { form.resetFields()}; restoreList() }}> 
						<b> Restore </b> 
					</Button>
				</Form.Item>
			</Form>
			{
				type === 'anime' || type === undefined ? (
					<ListAnime 
						animeList = { animeList } loading = { loading } 
						messageType = { messageType }
						message = 'Waiting For Search...'
					/>
				) : (
					<ListManga 
						mangaList = { mangaList } loading = { loading }
						messageType = { messageType }
						message = 'Waiting For Search...'
					/>
				)
			}
		</>
    )
};

export default AdvancedSearch;