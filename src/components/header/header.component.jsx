import React from 'react';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';


const Header = () => (
	<div className='header'>
		<Link className='logo-container' to="/">
			<Logo />
		</Link>
		<div className='options'>
			<Link to='/shop' className='option'>
				SHOP
			</Link>
			<Link to='/shop' className='option'>
				CONTACT
			</Link>
		</div>
	</div>
)



export default Header;