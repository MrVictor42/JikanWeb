import React, { useState } from 'react';
import { Drawer, Image, Col, Row } from 'antd';
import ReactPlayer from 'react-player';

const DetailAnimeList = (props) => {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const continuing = props.anime.continuing ? 'Yes' : 'No';
    const kids = props.anime.kids ? 'Yes' : 'No';

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
                width = { 1370 } height = { 'auto' }
                placement = 'right' closable = { true } onClose = { onClose } visible = { visible }
            >
                <Row gutter = { 16 }>
                    <Col span = { 12 }>
                        <Image 
                            className = 'img_list' src = { props.anime.image_url } 
                            preview = { false } 
                            style = {{ marginTop: '20px', marginLeft: '30px' }}
                        />
                    </Col>
                    <Col span = { 12 }>
                        {
                            props.anime.trailer_url !== null ? (
                                <>
                                    
                                    <ReactPlayer 
                                        url = { props.anime.trailer_url } 
                                        style = {{ marginLeft: '20px', marginTop: '20px' }}
                                    />
                                </>
                            ) : (
                                null
                            )
                        }
                    </Col>
                </Row>
                
                <Row gutter = { 16 }>
                    <Col span = { 12 } 
                        style = {{ marginTop: '20px', marginLeft: '20px', textAlign: 'justify' }}
                    >
                        <p> <b> Title: </b> { props.anime.title } </p>
                        <p> <b> Synopsis: </b> { props.anime.synopsis } </p>
                        <p> <b> Score: </b> { props.anime.score } </p>
                        <p> <b> Genres: </b> 
                            { props.anime.genders.map(function(gender) {
                                return (
                                    <span> { gender.name } | </span>
                                )
                            })}
                        </p>
                        <p> <b> Episodes: </b> { props.anime.episodes } </p>
                        <p> <b> Status: </b> { props.anime.status } </p>
                        <p> <b> Continuous: </b> { continuing } </p>
                        <p> <b> Kids: </b> { props.anime.kids } </p>
                        <p> <b> Airing Start: </b> { props.anime.airing_start } </p>
                    </Col>
                </Row>
            </Drawer> 
        </>
    )
};

export default DetailAnimeList;