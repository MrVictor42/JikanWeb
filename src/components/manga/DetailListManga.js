import React from 'react';
import { Image, Card } from 'antd';

const { Meta } = Card;

const DetailListManga = (props) => {

    return (
        <Card style = {{ width: 'auto', marginTop: 20, paddingLeft: 20, paddingRight: 20 }}>
            <Meta 
                avatar = {
                    <Image className = 'img_list' src = { props.manga.image_url } />
                }
                title = { <b> { props.manga.title } </b> }
                description = {
                    <>
                        <p style = {{ fontSize: '16px' }}> 
                            <b> Start_Date: </b> { props.manga.start_date }
                        </p>
                        <p style = {{ fontSize: '16px' }}> 
                            <b> End_Date: </b> { props.manga.end_date }
                        </p>
                        <p style = {{ fontSize: '16px' }}> 
                            <b> Volumes: </b> { props.manga.volumes }
                        </p>
                        <p style = {{ fontSize: '16px' }}> 
                            <b> Score: </b> { props.manga.score } 
                        </p>
                        <p style = {{ fontSize: '16px' }}> 
                            <b> Status: </b> { props.manga.status } 
                        </p>
                        <p style = {{ fontSize: '16px' }}> 
                            <b> Type: </b> { props.manga.type } 
                        </p>
                        <p style = {{ fontSize: '16px' }}> 
                            <b> Chapters: </b> { props.manga.chapter } 
                        </p>
                    </>
                }
            />
        </Card>
    )
};

export default DetailListManga;