export const addItemToCard = (cardItems, cardItemToAdd) => {
	const existingCardItem = cardItems.find(
		cardItem => cardItem.id === cardItemToAdd.id
	);

	if(existingCardItem) { 
		return cardItems.map(cardItem =>
			cardItem.id === cardItemToAdd.id
				? { ...cardItem, quantity: cardItem.quantity + 1 }
				: cardItem
        )
	}

	return [...cardItems, { ...cardItemToAdd, quantity: 1 }]
}

export const removeItemFromCard = (cardItems, cardItemToRemove) => {
	const existingCardItem = cardItems.find(
		cardItem => cardItem.id === cardItemToRemove.id
	);

	if(existingCardItem.quantity === 1){
		return cardItems.filter(cardItem => cardItem.id != cardItemToRemove.id)
	}

	return cardItems.map(cardItem =>
		cardItem.id === cardItemToRemove.id 
			? { ...cardItem, quantity: cardItem.quantity - 1 }
			: cardItem
	);
};