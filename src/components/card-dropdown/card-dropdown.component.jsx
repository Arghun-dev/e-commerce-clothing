import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './card-dropdown.styles.scss';
import CardItem from '../card-item/card-item.component';
import { connect } from 'react-redux';
import {selectCardItems} from '../../redux/card/card.selectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {toggleCardHidden} from '../../redux/card/card.actions';


const CardDropDown = ({cardItems, history, dispatch}) => (
	<div className='card-dropdown'>
		<div className='card-items'>
			{
				cardItems.length ?
				cardItems.map(cardItem => <CardItem key={cardItem.id} item={cardItem} />)
				:
				<span className='empty-message'>Your Card is empty</span>
			}
		</div>
		<CustomButton 
			onClick={() => {
				history.push('/checkout');
				dispatch(toggleCardHidden());
			}}>
				GO TO CHECKOUT
		</CustomButton>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cardItems: selectCardItems
})

export default withRouter(connect(mapStateToProps)(CardDropDown));