import React, { useState, useEffect } from 'react';
import { Cascader, Form, Button } from 'antd';

import { getListGender } from '../../api/gender';
import { getListProducer } from '../../api/producer';
import ListAnime from '../anime/ListAnime';

const Filterbar = () => {

	const [form] = Form.useForm();
  	const [formLayout] = useState('inline');
	const [genders, setGenders] = useState('');
	const [producers, setProducers] = useState('');
	const [selectGender, setSelectGender] = useState('');
	const [selectProducer, setSelectProducer] = useState('');

	useEffect(() => {
        async function syncLists() {
			const genders = await getListGender();
			const producers = await getListProducer();
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

			setProducers(producersForFilter);
			setGenders(gendersForFilter);
        }

        syncLists();
    }, []);

	const onChangeGenres = (value) => {
		setSelectGender(value);
	}

	const onChangeProducers = (value) => {
		setSelectProducer(value);
	}

	const getFilters = () => {
		alert(selectGender)
		alert(selectProducer)
	}

	const restore = () => {
		setSelectGender('');
		setSelectProducer('');
	}

    return(
		<>
			<Form 
				layout = { formLayout } form = { form } initialValues = {{ layout: formLayout }}
				style = {{ paddingTop: '20px', margin: 'auto', width: 'auto', paddingLeft: '30%' }}
			>
				<Form.Item label = { <b> Genres </b> } >
					<Cascader
						placeholder = { selectGender } 
						options = { genders } 
						onChange = { onChangeGenres } style = {{ width: '120px' }} 
					/>
				</Form.Item>
				<Form.Item label = { <b> Producers </b> } >
					<Cascader
						placeholder = { selectProducer } 
						options = { producers }  
						onChange = { onChangeProducers }  style = {{ width: '120px' }} 
					/>
				</Form.Item>
				<Form.Item>
					<Button block onClick = {() => getFilters() }> Apply </Button>
				</Form.Item>
				<Form.Item>
					<Button block onClick = {() => restore() }> Restore </Button>
				</Form.Item>
			</Form>
			<ListAnime />
		</>
	);
}

export default Filterbar;