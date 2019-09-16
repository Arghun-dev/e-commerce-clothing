import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './card-dropdown.styles.scss';
import CardItem from '../card-item/card-item.component';
import { connect } from 'react-redux';
import {selectCardItems} from '../../redux/card/card.selectors';


const CardDropDown = ({cardItems}) => (
	<div className='card-dropdown'>
		<div className='card-items'>
			{
				cardItems.map(cardItem => <CardItem key={cardItem.id} item={cardItem} />)
			}
		</div>
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
);

const mapStateToProps = ({card: {cardItems}}) => ({
	cardItems
})

export default connect(mapStateToProps)(CardDropDown);