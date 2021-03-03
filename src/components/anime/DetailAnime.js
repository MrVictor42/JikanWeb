import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';

import { getAnime, getVideosAnime } from '../../api/anime';
import DetailsListAnime from './DetailListsAnime';

const DetailAnime = (props) => {

    const [loading, setLoading] = useState(true);
    const [anime, setAnime] = useState();
    const [videos, setVideos] = useState('');
    
    useEffect(() => {
        getSelectedAnime();
    }, []);

    async function getSelectedAnime() {
        
        setLoading(true);
        const selectedAnime = await getAnime(props.match.params.slug);
        const videos = await getVideosAnime(selectedAnime.data.mal_id);
        setAnime(selectedAnime.data);
        setVideos(videos.data.trailer_url);
        setLoading(false);
    }

    return (
        <>
            {
                loading === true ? (
                    <Skeleton />
                ) : (
                    <DetailsListAnime anime = { anime } videos = { videos }/>
                )
            }
        </>
    )
};

export default DetailAnime;