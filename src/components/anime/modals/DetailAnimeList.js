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
                        style = {{ marginTop: '20px', marginLeft: '20px', textAlign: 'justify' }}>
                        <DescriptionAnime 
                            title = { <b> Title </b> } content = { props.anime.title } 
                        />
                        <DescriptionAnime 
                            title = { <b> Synopsis </b> } content = { props.anime.synopsis } 
                        />
                        <DescriptionAnime 
                            title = { <b> Score </b> } content = { props.anime.score } 
                        />
                        <DescriptionAnime 
                            title = { <b> Genres </b> } content = { props.anime.genders.map(function(gender) {
                                return (
                                    <span> { gender.name } | </span>
                                )
                            }) } 
                        />
                        <DescriptionAnime 
                            title = { <b> Episodes </b> } content = { props.anime.episodes } 
                        />
                        <DescriptionAnime 
                            title = { <b> Status </b> } content = { props.anime.status } 
                        />
                        <DescriptionAnime 
                            title = { <b> Continuous </b> } content = { continuing } 
                        />
                        <DescriptionAnime 
                            title = { <b> Kids </b> } content = { kids } 
                        />
                        <DescriptionAnime 
                            title = { <b> Airing Start </b> } content = { props.anime.airing_start } 
                        />
                    </Col>
                </Row>
            </Drawer> 
        </>
    )
};

const DescriptionAnime = ({ title, content }) => (
    <div
      	className = 'site-description-item-profile-wrapper'
      	style = {{ fontSize: 14, lineHeight: '22px', marginBottom: 7 }}
    >
		<p 
			className = 'site-description-item-profile-p' 
		  	style = {{ marginRight: 8, display: 'inline-block' }}
      	>
    		{ title } :
      	</p>
      	{ content }
    </div>
);

export default DetailAnimeList;