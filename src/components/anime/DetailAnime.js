import React, { useState, useEffect } from 'react';
import { Card, Skeleton } from 'antd';

import { getAnime } from '../../api/anime';
import DetailsList from './DetailsList';

const DetailAnime = (props) => {

    const [loading, setLoading] = useState(true);
    const [anime, setAnime] = useState();
    
    useEffect(() => {
        async function getSelectedAnime() {
            setLoading(true);
            const selectedAnime = await getAnime(props.match.params.slug);
            setAnime(selectedAnime.data);
            setLoading(false);
        }

        getSelectedAnime();
    }, []);

    return (
        <>
            {
                loading === true ? (
                    <Skeleton />
                ) : (
                    <DetailsList item = { anime } visible = { true }/>
                )
            }
        </>
    )
};

export default DetailAnime;