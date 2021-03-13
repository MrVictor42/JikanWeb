import React, { useState, useEffect } from 'react';
import { Drawer, Image, Col, Row, Spin } from 'antd';

import { getManga } from '../../api/manga';

const DetailManga = (props) => {

    const [visible, setVisible] = useState(false);
    const [mangaDetail, setMangaDetail] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getDetailManga(props);
    }, []);

	async function getDetailManga(props) {
        setLoading(true);
        const detail = await getManga(props.manga_id);
        setMangaDetail(detail);
        setLoading(false);
    }

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            {
                loading ? (
                    <Spin className = 'loadingSpin'/>
                ) : (
                    <>
                        <a onClick = { showDrawer }>
                            <Image 
                                className = 'img_list' src = { mangaDetail.image_url } 
                                preview = { false } 
                            />    
                        </a>
                        <Drawer
                            title = { <b> { `Manga: ${ mangaDetail.title }` } </b> } 
                            width = { 'auto' } height = { 'auto' }
                            placement = 'right' closable = { true } onClose = { onClose } visible = { visible }
                        >
                            <Row>
                                <Image 
                                    className = 'img_list' src = { mangaDetail.image_url } 
                                    preview = { false } 
                                    style = {{ marginTop: '20px', marginLeft: '20px' }}
                                />
                                <Col span = { 12 } 
                                    style = {{ marginTop: '20px', marginLeft: '20px', textAlign: 'justify' }}
                                >
                                    <p> <b> Title: </b> { mangaDetail.title } </p>
                                    <p> <b> Status: </b> { mangaDetail.status } </p>

                                    {
                                        mangaDetail.publishing === true ? (
                                            <>
                                                <p> <b> Start_Date: </b> 
                                                    { mangaDetail.published.prop.from.month }-
                                                    { mangaDetail.published.prop.from.day }- 
                                                    { mangaDetail.published.prop.from.year }
                                                </p>
                                                <p> <b> End_Date: </b> Undefined </p>
                                                <p> <b> Chapters: </b> Undefined </p> 
                                            </>
                                        ) : (
                                            <>
                                                <p> <b> Start Date: </b> 
                                                    { mangaDetail.published.prop.from.month }-
                                                    { mangaDetail.published.prop.from.day }- 
                                                    { mangaDetail.published.prop.from.year }
                                                </p>
                                                <p> <b> End Date: </b> 
                                                    { mangaDetail.published.prop.to.month }-
                                                    { mangaDetail.published.prop.to.day }- 
                                                    { mangaDetail.published.prop.to.year }
                                                </p>
                                                <p> <b> Chapters: </b> { mangaDetail.chapter } </p>
                                            </>
                                        )
                                    }

                                    <p> <b> Score: </b> { mangaDetail.score } </p>
                                    <p> <b> Type: </b> { mangaDetail.type } </p>
                                    <p> <b> Synopsis: </b> { mangaDetail.synopsis } </p>
                                    <p> <b> Background: </b> { mangaDetail.background } </p>
                                    <p> <b> Genres: </b> { mangaDetail.genres.map(function(genre){
                                        return (
                                            <span key = { genre.mal_id }>
                                                { ' ' + genre.name } |
                                            </span>
                                        )
                                    })} </p>
                                </Col>
                            </Row>
                        </Drawer>
                    </>
                )
            }
        </>
    )
};

export default DetailManga;