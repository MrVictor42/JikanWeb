import React, { useState, useEffect } from 'react';
import { Table, Tag, Spin } from 'antd';

import { getListManga } from '../../api/manga';

const TableManga = () => {

    const[mangaList, setMangaList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
		getMangaList();
    }, []);

	async function getMangaList() {
		setLoading(true);
		const mangaList = await getListManga();
        const mangaListForTable = mangaList.data.map((item) => {
			return {
				key: item.id,
				title: (
					<b> <a href = { `/manga/${ item.slug }` }> { item.title } </a> </b>
				),
                tagsStartDate: [ item.start_date ],
                tagsVolume: [ item.volumes ],
                tagsEndDate: [ item.end_date ],
				tagsScore: [ item.score ]
			}
		});
		setMangaList(mangaListForTable);
		setLoading(false);
	}

    const columns = [
		{
			title: <b> { 'Title' } </b>,
			dataIndex: 'title',
			key: 'title',
			width: '20%',
		},
		{
			title: <b> { 'Start Date' } </b>,
			dataIndex: 'tagsStartDate',
			key: 'tagsStartDate',
			width: '10%',
			render: tagsStartDate => (
				<>
					{ tagsStartDate.map(start_date => {
						
						let color = '';

						if(start_date === 'Undefined') {
							color = 'red';
						} else {
							color = 'green';
						}

						return (
							<Tag color = { color } key = { start_date } >
								<b> { start_date } </b> 
							</Tag>
						);
					})}
				</>
			)
		},
		{
			title: <b> { 'End Date' } </b>,
			dataIndex: 'tagsEndDate',
			key: 'tagsEndDate',
			width: '10%',
			render: tagsEndDate => (
				<>
					{ tagsEndDate.map(end_date => {
						
						let color = '';

						if(end_date === 'Undefined') {
							color = 'red';
						} else {
							color = 'green';
						}

						return (
							<Tag color = { color } key = { end_date } >
								<b> { end_date } </b> 
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
			title: <b> { 'Volumes' } </b>,
			dataIndex: 'tagsVolume',
			key: 'tagsVolume',
			width: '10%',
			render: tagsVolume => (
				<>
					{ tagsVolume.map(volumes => {
						
						let color = '';

						if(volumes === 0) {
							color = 'red';
						} else {
							color = 'green';
						}

						return (
							<Tag color = { color } key = { volumes } >
								<b> { volumes } </b> 
							</Tag>
						);
					})}
				</>
			)
		}
	];

    console.log(mangaList)

    return (
		loading ? (
            <Spin tip = 'Loading Table Manga, Wait For ...' className = 'loadingSpin'/>
        ) : (
			<Table 
				columns = { columns } dataSource = { mangaList } 
				pagination = {{ showSizeChanger: false }} 
			/>
		)
	)
};

export default TableManga;