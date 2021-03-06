import React, { useState } from 'react';
import { Drawer, Image, Col, Row } from 'antd';

const DetailMangaList = (props) => {

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
                    className = 'img_list' src = { props.manga.image_url } 
                    preview = { false } 
                />    
            </a>
            <Drawer
                title = { <b> { `Manga: ${ props.manga.title }` } </b> } 
                width = { 720 } height = { 'auto' }
                placement = 'right' closable = { true } onClose = { onClose } visible = { visible }
            >
                <Row>
                    <Image 
                        className = 'img_list' src = { props.manga.image_url } 
                        preview = { false } 
                        style = {{ marginTop: '20px', marginLeft: '20px' }}
                    />
                    <Col span = { 12 } 
                        style = {{ marginTop: '20px', marginLeft: '20px', textAlign: 'justify' }}
                    >
                        <p style = {{ fontSize: '16px' }}> 
                            <b> Title: </b> { props.manga.title }
                        </p>
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
                    </Col>
                </Row>
            </Drawer>
        </>
    )
};

export default DetailMangaList;