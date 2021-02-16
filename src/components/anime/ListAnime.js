import React from 'react';
import { List, Image } from 'antd';

import DetailsLists from './DetailsList';

const ListAnime = () => {

    const listData = [];

    for (let i = 0; i < 23; i++) {
        listData.push({
            href: 'https://ant.design',
            title: `ant design part ${i}`,
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            image: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        });
    }

    return (
        <List
            itemLayout = 'vertical' size = 'small'
            pagination = {{ position: 'both', showSizeChanger: true, pageSizeOptions: ["4", "10", "100", "1000"] }} grid = {{ column: 2 }}
            dataSource = { listData } 
            style = {{ 
                margin: 'auto', width: 'auto', paddingLeft: '30px', 
                paddingRight: '30px' 
            }}
            renderItem = { item => (
                <List.Item 
                    key = { item.title }
                >
                    <List.Item.Meta
                        title= { <a href = { item.href }> { <b> { item.title } </b> } </a> }
                    />
                    <List.Item.Meta
                        avatar = { <Image width = { 200 } src = { item.image } /> }
                        description = { <DetailsLists item = { item }/> }
                    />
                </List.Item>
            )}
        />
    );
}

export default ListAnime;