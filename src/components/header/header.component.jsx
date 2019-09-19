import React from 'react';
import {HeaderContainer, OptionsContainer, LogoContainer, OptionLink} from './header.styles';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../../src/firebase/firebase.utils';
import { connect } from 'react-redux';
import CardIcon from '../card-icon/card-icon.component';
import CardDropDown from '../card-dropdown/card-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCardHidden } from '../../redux/card/card.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';


const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer to="/">
			<Logo />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to='/shop'>
				SHOP
			</OptionLink>
			<OptionLink to='/shop'>
				CONTACT
			</OptionLink>
			{
				currentUser ?
				<OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
				:
				<OptionLink to='/signin'>SIGN IN</OptionLink>
			}
			<CardIcon />
		</OptionsContainer>
		{
			hidden ? null : <CardDropDown />
		}
	</HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCardHidden
})

export default connect(mapStateToProps)(Header);