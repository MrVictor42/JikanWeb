import React, { useState, useEffect } from 'react';
import { Cascader, Form, Button } from 'antd';

import { getListGender } from '../../api/gender';
import { getListProducer } from '../../api/producer';
import { 
	getListAnime, getListAnimeByProducer, getListAnimeByGenderAndProducer, getListAnimeByGender 
} from '../../api/anime';

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
		const genders = await getListGender();
		const producers = await getListProducer();
		const anime = await getListAnime();
		const producersForFilter = producers.data.map(function(item) {
			return {
				value: item.id,
				label: item.name
			}
		});
		const gendersForFilter = genders.data.map(function(item) {
			return {
				value: item.id,
				label: item.name
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