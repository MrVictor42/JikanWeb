import React from 'react';
import { Image, Card } from 'antd';
import ReactPlayer from "react-player";

const { Meta } = Card;

const DetailListsAnime = (props) => {

    const genders = props.anime.genders.map(function(item) {
        if(item.name === null) {
            return '';
        } else {
            return item.name + " | ";
        }
    });
    const continuing = props.anime.continuing ? 'Yes' : 'No';
    const kids = props.anime.kids ? 'Yes' : 'No';

    return (
        <>
            <Card style = {{ width: 'auto', marginTop: 20, paddingLeft: 20, paddingRight: 20 }}>
                <Meta
                    avatar = {
                        <Image className = 'img_list' src = { props.anime.image_url } />
                    }
                    title = { <b> { props.anime.title } </b> }
                    description = {
                        <>
                            <p align = 'justify' style = {{ fontSize: '16px' }}> 
                                <b> Synopsis: </b> { props.anime.synopsis } 
                            </p>
                            <p style = {{ fontSize: '16px' }}> 
                                <b> Score: </b> { props.anime.score } 
                            </p>
                            <p style = {{ fontSize: '16px' }}> 
                                <b> Genders: </b> { genders }
                            </p>
                            <p style = {{ fontSize: '16px' }}> 
                                <b> Episodes: </b> { props.anime.episodes }
                            </p>
                            <p style = {{ fontSize: '16px' }}> 
                                <b> Continuous: </b> { continuing }
                            </p>
                            <p style = {{ fontSize: '16px' }}> 
                                <b> Kids: </b> { kids }
                            </p>
                            <p style = {{ fontSize: '16px' }}> 
                                <b> Airing Start: </b> { props.anime.airing_start }
                            </p>
                            <br/>
                            <h1 style = {{ fontSize: '30px' }}> Trailer </h1>                            
                            <ReactPlayer
                                url = { props.videos }
                            />
                        </>
                    }
                />
            </Card>
        </>
    );
}

export default DetailListsAnime;