import React from 'react';
import { Image, Card } from 'antd';

const { Meta } = Card;

const DetailListManga = (props) => {

    return (
        <>
            <Card style = {{ width: 'auto', marginTop: 20, paddingLeft: 20, paddingRight: 20 }}>
                <Meta 
                    avatar = {
                        <Image className = 'img_list' src = { props.item.image_url } />
                    }
                    title = { <b> { props.item.title } </b> }
                    description = {
                        <>
                            <p style = {{ fontSize: '16px' }}> 
                                <b> Start_Date: </b> { props.item.start_date }
                            </p>
                            <p style = {{ fontSize: '16px' }}> 
                                <b> End_Date: </b> { props.item.end_date }
                            </p>
                            <p style = {{ fontSize: '16px' }}> 
                                <b> Volumes: </b> { props.item.volumes }
                            </p>
                            <p style = {{ fontSize: '16px' }}> 
                                <b> Score: </b> { props.item.score } 
                            </p>
                        </>
                    }
                />
            </Card>
        </>
    )
};

export default DetailListManga;