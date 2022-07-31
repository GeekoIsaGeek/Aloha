import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import useProductsCtx from '../../../Store/ProductsContext';
import { Navigate } from 'react-router-dom';
import AdditionalImages from './AdditionalImages';
import OtherDetails from './OtherDetails';

const ProductDetails = () => {
	const { productId } = useParams();
	const { products } = useProductsCtx();
	const product = products.find((pdct) => pdct.id == productId);

	const [mainImage, setMainImage] = useState(product?.images[0]);

	if (!product) {
		return <Navigate to='/' />;
	} else {
		return (
			<StyledWrapper>
				<AdditionalImages product={product} setMainImage={setMainImage} />
				<StyledSelectedImage src={mainImage} />
				<OtherDetails product={product} />
			</StyledWrapper>
		);
	}
};

export default ProductDetails;

const StyledWrapper = styled.div`
	padding: 50px 30px;
	display: flex;
	width: 100vw;
`;

const StyledSelectedImage = styled.img`
	height: 40vw;
	min-width: 40vw;
	object-fit: contain;
	margin-right: 20px;
	margin-left: 10px;
`;
