import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';

import { getAnime } from '../../api/anime';
import DetailListAnime from './DetailListAnime';

const DetailAnime = (props) => {

    const [loading, setLoading] = useState(true);
    const [anime, setAnime] = useState();
    
    useEffect(() => {
        getSelectedAnime();
    }, []);

    async function getSelectedAnime() {
        setLoading(true);
        const selectedAnime = await getAnime(props.match.params.slug);
        setAnime(selectedAnime.data);
        setLoading(false);
    }

    return (
        <>
            {
                loading === true ? (
                    <Skeleton />
                ) : (
                    <DetailListAnime anime = { anime } />
                )
            }
        </>
    )
};

export default DetailAnime;