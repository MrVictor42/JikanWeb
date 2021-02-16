import React, { useState } from 'react';
import { Cascader, Form, Button } from 'antd';

const Filterbar = () => {

	const [ form ] = Form.useForm();
  	const [ formLayout ] = useState('inline');
	const [ genders, setGenders ] = useState('');
	const [ producers, setProducers ] = useState('');
	const [ clear ] = useState(false);

	const onChangeGenres = (value) => {
		setGenders(value);
	}

	const onChangeProducers = (value) => {
		setProducers(value);
	}

	const getFilters = () => {
		alert(genders)
		alert(producers)
	}

	const restore = () => {
		setGenders('');
		setProducers('');
	}

	const gendersArray = [
		{
		  value: 'gender',
		  label: 'Gender'
		},
	];

	const producersArray = [
		{
		  value: 'producers',
		  label: 'Producers'
		},
	];

    return(
		<>
			<Form 
				layout = { formLayout } form = { form } initialValues = {{ layout: formLayout }}
				style = {{ paddingTop: '20px', margin: 'auto', width: 'auto', paddingLeft: '30%' }}
			>
				<Form.Item label = { <b> Genres </b> } >
					<Cascader 
						options = { gendersArray } placeholder = { genders } value = { clear }
						onChange = { onChangeGenres } style = {{ width: '120px' }} 
					/>
				</Form.Item>
				<Form.Item label = { <b> Producers </b> } >
					<Cascader 
						options = { producersArray } placeholder = { producers } value = { clear }
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
		</>
	);
}

export default Filterbar;