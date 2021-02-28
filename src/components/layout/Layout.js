import React from 'react';
import { Layout } from 'antd';

import Navbar from './Navbar';

const { Content } = Layout;
const CustomLayout = (props) => {
    return(
        <Layout style = {{ backgroundColor: 'black' }}>
            <Navbar isLogged = { props.token }/>
            <Content>
				{ props.children }
			</Content>
        </Layout>
    );
}

export default CustomLayout;