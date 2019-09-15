export const addItemToCard = (cardItems, cardItemToAdd) => {
	const existingCardItem = cardItems.find(
		cardItem => cardItem.id === cardItemToAdd
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