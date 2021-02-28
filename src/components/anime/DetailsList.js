import React from 'react';
import { Image, Card } from 'antd';

const { Meta } = Card;

const DetailsLists = (props) => {

    const genders = props.item.genders.map(function(item) {
        if(item.name === null) {
            return '';
        } else {
            return item.name + " | ";
        }
    });
    const continuing = props.item.continuing ? 'Yes' : 'No';
    const kids = props.item.kids ? 'Yes' : 'No';

    return (
        <>
            {
                props.visible === true ? (
                    <Card style = {{ width: 'auto', marginTop: 20, paddingLeft: 20, paddingRight: 20 }}>
                        <Meta
                            avatar = {
                                <Image className = 'img_list' src = { props.item.image_url } />
                            }
                            title = { <b> { props.item.title } </b> }
                            description = {
                                <>
                                    <p align = 'justify' style = {{ fontSize: '16px' }}> 
                                        <b> Synopsis: </b> { props.item.synopsis } 
                                    </p>
                                    <p style = {{ fontSize: '16px' }}> 
                                        <b> Score: </b> { props.item.score } 
                                    </p>
                                    <p style = {{ fontSize: '16px' }}> 
                                        <b> Genders: </b> { genders }
                                    </p>
                                    <p style = {{ fontSize: '16px' }}> 
                                        <b> Episodes: </b> { props.item.episodes }
                                    </p>
                                    <p style = {{ fontSize: '16px' }}> 
                                        <b> Continuous: </b> { continuing }
                                    </p>
                                    <p style = {{ fontSize: '16px' }}> 
                                        <b> Kids: </b> { kids }
                                    </p>
                                    <p style = {{ fontSize: '16px' }}> 
                                        <b> Airing Start: </b> { props.item.airing_start }
                                    </p>
                                </>
                            }
                        />
                    </Card>
                ) : (
                    <>
                        <p align = 'justify' style = {{ fontSize: '16px' }}> 
                            <b> Synopsis: </b> { props.item.synopsis } 
                        </p>
                        <p style = {{ fontSize: '16px' }}> 
                            <b> Score: </b> { props.item.score } 
                        </p>
                        <p style = {{ fontSize: '16px' }}> 
                            <b> Gender: </b> { genders }
                        </p>
                    </>
                )
            }
        </>
    );
}

export default DetailsLists;