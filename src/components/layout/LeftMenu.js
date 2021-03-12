import React from 'react';
import { Menu, Grid } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const LeftMenu = () => {
  	const { md } = useBreakpoint();
	return (
		<Menu mode = { md ? 'horizontal' : 'inline' } 
			style = {{ fontSize: '16px', color: '#1890ff', background: 'black' }}
		>
			<SubMenu key = 'content' title = { <span> Content </span> }>
				<MenuItemGroup title = 'Anime'>
					<Menu.Item key = 'animeContent'> <a href = '/list_anime'> Anime </a> </Menu.Item>
				</MenuItemGroup>
				<MenuItemGroup title = 'Manga'>
					<Menu.Item key = 'mangaContent'> <a href = '/list_manga'> Manga </a> </Menu.Item>
				</MenuItemGroup>
			</SubMenu>
			<Menu.Item key = 'top10'>
				<a href = '/top_anime' style = {{ fontSize: '16px', color: '#1890ff' }}> Top10! </a>
			</Menu.Item>
			<Menu.Item key = 'advanced_search'>
				<a href = '/advanced_search' style = {{ fontSize: '16px', color: '#1890ff' }}> 
					Advanced Search 
				</a>
			</Menu.Item>
			<Menu.Item key = 'contact'>
				<a href = '/contact' style = {{ fontSize: '16px', color: '#1890ff' }}> Contact </a>
			</Menu.Item>
		</Menu>
	);
}

export default LeftMenu;