import React, { useState, useEffect } from 'react';
import { Table, Tag, Spin } from 'antd';

import { getListAnime } from '../../api/anime';

const TableAnime = () => {

	const[animeList, setAnimeList] = useState([]);
    const [loading, setLoading] = useState(true);

	useEffect(() => {
		getAnimeList();
    }, []);

	async function getAnimeList() {
		setLoading(true);
		const animeList = await getListAnime();
		const animeListForTable = animeList.data.map((anime) => {
			return {
				key: anime.id,
				title: <b> { anime.title } </b>,
				tagsKids: [ anime.kids ],
				tagsContinuing: [ anime.continuing],
				tagsAiring_Start: [ anime.airing_start ],
				tagsEpisodes: [ anime.episodes ],
				tagsScore: [ anime.score ],
				trailer: (
					<a href = { anime.trailer_url }> <b> Link </b> </a>
				)
			}
		});
		setAnimeList(animeListForTable);
		setLoading(false);
	}

	const columns = [
		{
			title: <b> { 'Title' } </b>,
			dataIndex: 'title',
			key: 'title',
			width: '15%',
		},
		{
			title: <b> { 'Airing Start' } </b>,
			dataIndex: 'tagsAiring_Start',
			key: 'tagsAiring_Start',
			width: '10%',
			render: tagsAiring_Start => (
				<>
					{ tagsAiring_Start.map(airing_start => {
						
						let color = '';

						if(airing_start === 'Undefined') {
							color = 'red';
						} else {
							color = 'green';
						}

						return (
							<Tag color = { color } key = { airing_start } >
								<b> { airing_start } </b> 
							</Tag>
						);
					})}
				</>
			)
		},
		{
			title: <b> { 'Episodes' } </b>,
			dataIndex: 'tagsEpisodes',
			key: 'tagsEpisodes',
			width: '10%',
			render: tagsEpisodes => (
				<>
					{ tagsEpisodes.map(episode => {
						
						let color = '';

						if (episode === 0 ) {
							color = 'red';
						} else {
							color = 'blue';
						}

						return (
							<Tag color = { color } key = { episode } >
								<b> { episode } </b> 
							</Tag>
						);
					})}
				</>
			)
		},
		{
			title: <b> { 'Score' } </b>,
			dataIndex: 'tagsScore',
			key: 'tagsScore',
			width: '10%',
			render: tagsScore => (
				<>
					{ tagsScore.map(tag => {
						
						let color = '';

						if (tag >= 0 && tag <= 6.0) {
							color = 'red';
						} else if(tag > 6.0 && tag <= 8.0) {
							color = 'green';
						} else {
							color = 'blue';
						}

						return (
							<Tag color = { color } key = { tag } >
								<b> { tag } </b> 
							</Tag>
						);
					})}
				</>
			)
		},
		{
			title: <b> { 'Kids' } </b>,
			dataIndex: 'tagsKids',
			key: 'tagsKids',
			width: '10%',
			render: tagsKids => (
				<>
					{ tagsKids.map(kids => {
						
						let color = '';

						if (kids == false) {

							kids = 'No';
							color = 'red';
						} else {
							kids = 'Yes';
							color = 'blue';
						}

						return (
							<Tag color = { color } key = { kids } >
								<b> { kids } </b> 
							</Tag>
						);
					})}
				</>
			)
		},
		{
			title: <b> { 'Continuing' } </b>,
			dataIndex: 'tagsContinuing',
			key: 'tagsContinuing',
			width: '10%',
			render: tagsContinuing => (
				<>
					{ tagsContinuing.map(continuing => {
						
						let color = '';

						if (continuing == false) {

							continuing = 'No';
							color = 'red';
						} else {
							continuing = 'Yes';
							color = 'blue';
						}

						return (
							<Tag color = { color } key = { continuing } >
								<b> { continuing } </b> 
							</Tag>
						);
					})}
				</>
			)
		},
		{
			title: <b> { 'Trailer' } </b>,
			dataIndex: 'trailer',
			key: 'trailer',
			width: '10%',
		}
	];

	return (
		loading ? (
            <Spin tip = 'Loading Table Anime, Wait For ...' className = 'loadingSpin'/>
        ) : (
			<Table 
				columns = { columns } dataSource = { animeList } 
				pagination = {{ showSizeChanger: false }} 
			/>
		)
	)
};

export default TableAnime;