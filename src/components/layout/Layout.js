import React from 'react';
import { Layout } from 'antd';

import Navbar from './Navbar';

const CustomLayout = (props) => {
    return(
        <Layout style = {{ backgroundColor: 'black' }}>
            <Navbar />
            { props.children }
        </Layout>
    );
}

export default CustomLayout;