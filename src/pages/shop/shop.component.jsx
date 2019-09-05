import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/preview-collection/collection-preview.component';

class ShopPage extends React.Component {
	constructor(){
		super()

		this.state={
			collections: SHOP_DATA
		}
	}
	render(props){
		const {collections} = this.state;
		return(
			<div>
				{
					collections.map(({id, ...otherCollectionProps}) => (
						<CollectionPreview key={id} {...otherCollectionProps} />
					))
				}
			</div>
		);
	}
}


export default ShopPage;