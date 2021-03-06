import React, { useState }from 'react';
import { Drawer, Button } from 'antd';

import LeftMenu from './LeftMenu';
import Searchbar from './Searchbar';

const Navbar = () => {

	const [visible, setVisible] = useState(false);

	function showDrawer() {
		setVisible(true);
	}

	function onClose() {
		setVisible(false);
	}

	return(
		<nav className = 'menuBar'>
			<div className = 'logo'>
				<a href = '/'>MyAn</a>
			</div>
			<div className = 'menuCon'>
				<div className = 'leftMenu'>
					<LeftMenu style = {{ fontSize: '16px', color: '#1890ff' }}/>
				</div>
				<Searchbar />
				<Button className = 'barsMenu' type = 'primary' onClick = { showDrawer }>
					<span className = 'barsBtn'></span>
				</Button>
				<Drawer
					title = 'Basic Drawer'
					placement = 'left'
					closable = { false }
					onClose = { onClose }
					visible = { visible }
				>
					<LeftMenu />
				</Drawer>
			</div>
		</nav>
	);
}

export default Navbar;