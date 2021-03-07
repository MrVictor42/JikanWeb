import React, { useState, useEffect } from 'react';
import { Cascader, Form, Button } from 'antd';
import axios from 'axios';

import { getListGender } from '../../api/gender';
import { getListProducer } from '../../api/producer';
import { 
	getListAnime, getListAnimeByProducer, getListAnimeByGenderAndProducer, 
	getListAnimeByGender, getCountDatabase, getListAnimeAfterUpdate 
} from '../../api/anime';
import { apiListAnime } from '../../services/consts';

import ListAnime from '../anime/ListAnime';
import ListAnimeDay from '../anime/ListAnimeDay';

const Filterbar = () => {

	const [form] = Form.useForm();
  	const [formLayout] = useState('inline');
	const [genders, setGenders] = useState('');
	const [producers, setProducers] = useState('');
	const [loading, setLoading] = useState(true);
    const [animeList, setAnimeList] = useState([]);
    const [visible, setVisible] = useState(true);

	useEffect(() => {
        syncLists();
    }, []);

	async function syncLists() {
		
		setLoading(true);
		const databaseLength = await getCountDatabase();
		let anime = null;
		const apiJikanLength = await axios.get(apiListAnime);
		if(databaseLength.data === 0 || databaseLength.data != apiJikanLength.data.anime.length) {
			anime = await getListAnimeAfterUpdate();
		} else {
			anime = await getListAnime();
		}

		const producers = await getListProducer();
		const genders = await getListGender();

		const producersForFilter = producers.data.map(function(producer) {
			return {
				value: producer.id,
				label: producer.name
			}
		});
		const gendersForFilter = genders.data.map(function(gender) {
			return {
				value: gender.id,
				label: gender.name
			}
		});

		setAnimeList(anime.data);
		setProducers(producersForFilter);
		setGenders(gendersForFilter);
		setLoading(false);
	}

	const onFinish = async (values) => {
		const gender = values.gender;
		const producer = values.producer;

		setLoading(true);
		setVisible(false);

		if((gender && producer) !== undefined) {
			const animeGenderProducer = await getListAnimeByGenderAndProducer(gender, producer);
			setAnimeList(animeGenderProducer.data);
		} else if(gender !== null) {
			const animeGender = await getListAnimeByGender(gender);
			setAnimeList(animeGender.data);
		} else {
			const animeProducer = await getListAnimeByProducer(producer);
			setAnimeList(animeProducer.data);
		} 
		
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
				<Form.Item 
					label = {
						<b style = {{ color: '#1890ff', textTransform: 'uppercase' }}> 
							Producers 
						</b> } 
					name = { 'producer' }
				>
					<Cascader
						placeholder = { '' } 
						options = { producers }  
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