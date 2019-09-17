import React from 'react';
import './checkout-item.styles.scss';

import {connect} from 'react-redux';

import { clearItemFromCard, addItem, removeItem } from '../../redux/card/card.actions';


const CheckoutItem = ({ cardItem, clearItem, addItem, removeItem }) => {
	const { name, imageUrl, price, quantity } = cardItem;
	return(
	<div className='checkout-item'>
		<div className='image-container'>
			<img src={imageUrl} alt='item' />
		</div>
		<span className='name'>{name}</span>
		<span className='quantity'>
			<div className='arrow' onClick={() => removeItem(cardItem)}>&#10094;</div>
			<span className='value'>{quantity}</span>
			<div className='arrow' onClick={() => addItem(cardItem)}>&#10095;</div>
		</span>
		<span className='price'>{price}</span>
		<span className='remove-button' onClick={() => clearItem(cardItem)}>&#10005;</span>
	</div>
)};

const mapDispatchToProps = dispatch => ({
	clearItem: item => dispatch(clearItemFromCard(item)),
	addItem: item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);