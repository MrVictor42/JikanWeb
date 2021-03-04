import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';

import { getManga } from '../../api/manga';

import DetailListManga from './DetailListManga';

const DetailManga = (props) => {

    const [loading, setLoading] = useState(true);
    const [manga, setManga] = useState();
    
    useEffect(() => {
        getSelectedManga();
    }, []);

    async function getSelectedManga() {
        setLoading(true);
        const selectedManga = await getManga(props.match.params.slug);
        setManga(selectedManga.data);
        setLoading(false);
    }

    return (
        <>
            {
                loading === true ? (
                    <Skeleton />
                ) : (
                    <DetailListManga manga = { manga } />
                )
            }
        </>
    )
};

export default DetailManga;