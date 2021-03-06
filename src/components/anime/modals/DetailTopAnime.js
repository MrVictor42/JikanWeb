import React, { useState } from 'react';
import { Drawer, Image, Col, Row } from 'antd';

const DetailTopAnime = (props) => {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <a onClick = { showDrawer }>
                <Image 
                    className = 'img_list' src = { props.anime.image_url } 
                    preview = { false } 
                />    
            </a>
            <Drawer
                title = { <b> { `Anime: ${ props.anime.title }` } </b> } 
                width = { 'auto' } height = { 'auto' }
                placement = 'right' closable = { true } onClose = { onClose } visible = { visible }
            >
                <Row>
                    <Image 
                        className = 'img_list' src = { props.anime.image_url } 
                        preview = { false } 
                        style = {{ marginTop: '20px', marginLeft: '20px' }}
                    />
                    <Col span = { 12 } 
                        style = {{ marginTop: '20px', marginLeft: '20px', textAlign: 'justify' }}>
                        <p> <b> Title: </b> { props.anime.title } </p>
                        <p> <b> Start_Date: </b> { props.anime.start_date } </p>
                        <p> <b> End_Date: </b> { props.anime.end_date } </p>
                        <p> <b> Score: </b> { props.anime.score } </p>
                        <p> <b> Episodes: </b> { props.anime.episodes } </p>
                    </Col>
                </Row>
            </Drawer> 
        </>
    )
};

export default DetailTopAnime;