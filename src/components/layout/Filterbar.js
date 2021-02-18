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
	const [clear] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
        async function syncLists() {
            setLoading(true);
			const genders = await getListGender();
			const producers = await getListProducer();
			let final_genders = { genders: [] };
			let final_producers = { producers: [] };

			for(let aux = 0; aux < genders.data.length; aux ++) {
				final_genders.genders.push({
					value: genders.data[aux].name,
					label: genders.data[aux].name
				});
			}

			for(let aux = 0; aux < producers.data.length; aux ++) {
				final_producers.producers.push({
					value: producers.data[aux].name,
					label: producers.data[aux].name
				});
			}

			setProducers(final_producers.producers);
			setGenders(final_genders.genders);
            setLoading(false);
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
		alert(producers)
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
						options = { genders } value = { clear }
						onChange = { onChangeGenres } style = {{ width: '120px' }} 
					/>
				</Form.Item>
				<Form.Item label = { <b> Producers </b> } >
					<Cascader
						placeholder = { selectProducer } 
						options = { producers }  value = { clear }
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