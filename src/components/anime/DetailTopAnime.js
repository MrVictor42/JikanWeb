import React, { useState, useEffect } from 'react';
import { Skeleton, Image, Card, Col, Row } from 'antd';

import { getTopAnime } from '../../api/anime';

const { Meta } = Card;

const DetailTopAnime = (props) => {

    const [loading, setLoading] = useState(true);
    const [anime, setAnime] = useState();
    
    useEffect(() => {
        getSelectedTopAnime();
    }, []);

    async function getSelectedTopAnime() {
        setLoading(true);
        const selectedTopAnime = await getTopAnime(props.match.params.slug);
        setAnime(selectedTopAnime.data);
        setLoading(false);
    }

    return (
        <>
            {
                loading === true ? (
                    <Skeleton />
                ) : (
                    <Card 
                        style = {{ width: 'auto', marginTop: 20, paddingLeft: 20, paddingRight: 20 }}
                    >
                        <Meta 
                            avatar = {
                                <Image className = 'img_list' src = { anime.image_url } />
                            }
                            title = { <b> { anime.title } </b> }
                            description = {
                                <>
                                    <p style = {{ fontSize: '16px' }}> 
                                        <b> Start_Date: </b> { anime.start_date }
                                    </p>
                                    <p style = {{ fontSize: '16px' }}> 
                                        <b> End_Date: </b> { anime.end_date }
                                    </p>
                                    <p style = {{ fontSize: '16px' }}> 
                                        <b> Episodes: </b> { anime.episodes }
                                    </p>
                                    <p style = {{ fontSize: '16px' }}> 
                                        <b> Score: </b> { anime.score } 
                                    </p>
                                </>
                            }
                        />
                    </Card>
                )
            }
        </>
    )
};

export default DetailTopAnime;