import React from 'react';
import { Card, Col, Row, Image } from 'antd';
import { TeamOutlined, MailOutlined, PhoneOutlined, GithubOutlined } from '@ant-design/icons';

import Profile_Pic from '../../images/profile_pic.jpg';

const Contact = () => {

    return (
        <Row gutter = { 16 } style = {{ width: 'auto', backgroundColor: 'white' }}>
            <Col span = { 5 }>
                <Card bordered = { false } 
                    style = {{ marginTop: 20, paddingLeft: 20, paddingRight: 20 }}
                >
                    <Image className = 'img_list' src = { Profile_Pic } preview = { false }
                    style = {{ width: '200px' }}/>
                </Card>
            </Col>
            <Col span = { 8 }>
                <Card title = { <h3> <b> Who I Am? </b> </h3> } bordered = { false }>
                    <p> It's a good question, who i am don't think? My name is Victor, brazilian, graduated in software engineering from the University of Brasília, Brazil. </p>
                    <h2> <TeamOutlined /> Contact </h2> 
                    <h3> <MailOutlined /> victormota042@gmail.com </h3>
                    <h3> <PhoneOutlined /> +55 (61) 99459-2869 </h3>
                    <h3> <GithubOutlined /> 
                        <a 
                            href = 'https://github.com/MrVictor42/'> https://github.com/MrVictor42/
                        </a> 
                    </h3>
                </Card>
            </Col>
            <Col span = { 8 }>
                <Card title = { <h3> <b> Project </b> </h3> } bordered = { false }>
                    <p> In this project, i used api of <a href = 'https://jikan.docs.apiary.io/'> Jikan </a> in this project. For the frontend i use ReactJS and backend Java with spring boot. Initialy this project was to learn more about Java Spring Boot. In each repository will have more about each side. </p>
                    <h3> <GithubOutlined /> 
                        <a href = 'https://github.com/MrVictor42/jikanWeb'> FrontEnd - React </a> 
                    </h3>
                    <h3> <GithubOutlined /> 
                        <a 
                            href = 'https://github.com/MrVictor42/apiJikan'> Backend - Java/
                        </a> 
                    </h3>
                </Card>
            </Col>
        </Row>
    )
};

export default Contact;