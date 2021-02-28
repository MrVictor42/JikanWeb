import React, { useState, useEffect } from 'react';
import { Cascader, Form, Button } from 'antd';

import { getListGender } from '../../api/gender';
import { getListProducer } from '../../api/producer';
import { 
	getListAnime, getListAnimeByProducer, getListAnimeByGenderAndProducer, getListAnimeByGender 
} from '../../api/anime';

import ListAnime from '../anime/ListAnime';

const Filterbar = () => {

	const [form] = Form.useForm();
  	const [formLayout] = useState('inline');
	const [genders, setGenders] = useState('');
	const [producers, setProducers] = useState('');
	const [loading, setLoading] = useState(true);
    const [animeList, setAnimeList] = useState([]);

	useEffect(() => {
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

        syncLists();
    }, []);

	const onFinish = async (values) => {

		const gender = values.gender;
		const producer = values.producer;

		setLoading(true);

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
	}

    return(
		<>
			<Form 
				layout = { formLayout } form = { form } initialValues = {{ layout: formLayout }}
				style = {{ paddingTop: '20px', margin: 'auto', width: 'auto', paddingLeft: '30%' }}
				onFinish = { onFinish }
			>
				<Form.Item label = { <b> Genres </b> } name = { 'gender' }>
					<Cascader
						placeholder = { '' } 
						options = { genders } 
						style = {{ width: '120px' }} 
					/>
				</Form.Item>
				<Form.Item label = { <b> Producers </b> } name = { 'producer' }>
					<Cascader
						placeholder = { '' } 
						options = { producers }  
						style = {{ width: '120px' }} 
					/>
				</Form.Item>
				<Form.Item>
					<Button block htmlType = 'submit' > Apply </Button>
				</Form.Item>
				<Form.Item>
					<Button block onClick={() => { { form.resetFields()}; restoreList() }}> 
						Restore 
					</Button>
				</Form.Item>
			</Form>
			<ListAnime list = { animeList } loading = { loading } />
		</>
	);
}

export default Filterbar;