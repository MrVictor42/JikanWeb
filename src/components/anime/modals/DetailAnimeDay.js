import React, { useState } from 'react';
import { Drawer, Image, Col, Row } from 'antd';

const DetailAnimeDay = (props) => {

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
                            title = { <b> Episodes </b> } content = { props.anime.episodes } 
                        />
                        <DescriptionAnime 
                            title = { <b> Genres </b> } content = { props.anime.genres.map(function(gender) {
                                return (
                                    <p> { gender.name }  </p>
                                )
                            }) } 
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

export default DetailAnimeDay;