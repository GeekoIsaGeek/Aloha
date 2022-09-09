import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import useProductsCtx from '../../../Store/ProductsContext';
import { Navigate } from 'react-router-dom';
import AdditionalImages from './AdditionalImages';
import OtherDetails from './OtherDetails';
import { motion } from 'framer-motion';

const ProductDetails = () => {
	const { productId } = useParams();
	const { products } = useProductsCtx();
	const product = products.find((pdct) => pdct.id == productId);

	const [mainImage, setMainImage] = useState(product?.images[0]);

	if (!product) {
		return <Navigate to='/' />;
	} else {
		return (
			<StyledWrapper
				animate={{ opacity: 1, transition: { duration: 0.5 } }}
				exit={{ opacity: 0 }}
				initial={{ opacity: 0 }}
			>
				<AdditionalImages product={product} setMainImage={setMainImage} />
				<StyledSelectedImage
					src={mainImage}
					animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
					exit={{ opacity: 0, x: '-100%', transition: { duration: 0.4 } }}
					initial={{ opacity: 0, x: '-50%', transition: { duration: 1 } }}
				/>
				<OtherDetails
					product={product}
					animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
					exit={{ opacity: 0, x: '100%', transition: { duration: 0.4 } }}
					initial={{ opacity: 0, x: '-50%', transition: { duration: 1 } }}
				/>
			</StyledWrapper>
		);
	}
};

export default ProductDetails;

const StyledWrapper = styled(motion.div)`
	padding: 50px 30px;
	display: flex;
	width: 100vw;
	@media (max-width: 920px) {
		flex-direction: column;
		align-items: center;
		gap: 20px;
		padding: 25px;
	}
`;

const StyledSelectedImage = styled(motion.img)`
	height: 40vw;
	min-width: 40vw;
	object-fit: contain;
	margin-right: 20px;
	margin-left: 10px;
	@media (max-width: 920px) {
		width: 90vw;
	}
	@media (max-width: 620px) {
		width: 100%;
		height: unset;
		min-height: 50vh;
		max-height: 50vh;
	}
`;
