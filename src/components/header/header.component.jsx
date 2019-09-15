import React from 'react';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../../src/firebase/firebase.utils';
import { connect } from 'react-redux';
import CardIcon from '../card-icon/card-icon.component';
import CardDropDown from '../card-dropdown/card-dropdown.component';


const Header = ({ currentUser, hidden }) => (
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
			{
				currentUser ?
				<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
				:
				<Link className='option' to='/signin'>SIGN IN</Link>
			}
			<CardIcon />
		</div>
		{
			hidden ? null : <CardDropDown />
		}
	</div>
)

const mapStateToProps = ({user: {currentUser}, card: {hidden}}) => ({
	currentUser,
	hidden
})

export default connect(mapStateToProps)(Header);