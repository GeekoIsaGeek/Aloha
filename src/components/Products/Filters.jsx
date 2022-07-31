import React from 'react';
import styled from 'styled-components';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Filters = (props) => {
	const {
		showSortingOptions,
		setShowSortingOptions,
		showConditionOptions,
		setShowConditionOptions,
		sortByValue,
		setSortByValue,
		conditionValue,
		setConditionValue,
		sortProducts,
		filterProductsByCondition,
		setProducts,
	} = props;

	const handleSort = (e) => {
		const formattedSortByValue = e.target.innerText.trim().split(': ').join('-').toLowerCase();
		setSortByValue(formattedSortByValue);
		sortProducts(formattedSortByValue);
	};
	const filterProducts = (e) => {
		const formattedConditionValue = e.target.innerText.toLowerCase();
		setConditionValue(formattedConditionValue);
		const filteredProducts = filterProductsByCondition(formattedConditionValue);
		setProducts(filteredProducts);
	};

	return (
		<StyledFilters
			showConditionOptions={showConditionOptions}
			showSortingOptions={showSortingOptions}
		>
			<div className='condition' onClick={() => setShowConditionOptions(!showConditionOptions)}>
				{conditionValue ? `condition: ${conditionValue}` : 'condition'}
				{showConditionOptions ? <IoIosArrowUp /> : <IoIosArrowDown />}
				<ul>
					<li onClick={(e) => filterProducts(e)}>Any</li>
					<li onClick={(e) => filterProducts(e)}>New</li>
					<li onClick={(e) => filterProducts(e)}>Used</li>
				</ul>
			</div>

			<div className='sortBy' onClick={() => setShowSortingOptions(!showSortingOptions)}>
				{sortByValue || 'Sort By'} {showSortingOptions ? <IoIosArrowUp /> : <IoIosArrowDown />}
				<ul>
					<li onClick={(e) => handleSort(e)}>Date: Newest</li>
					<li onClick={(e) => handleSort(e)}>Date: Oldest</li>
					<li onClick={(e) => handleSort(e)}>Price: Highest</li>
					<li onClick={(e) => handleSort(e)}>Price: Lowest</li>
				</ul>
			</div>
		</StyledFilters>
	);
};

export default Filters;

const StyledFilters = styled.div`
	margin: 40px 0;
	text-transform: capitalize;
	display: flex;
	gap: 40px;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	font-weight: 500;
	.sortBy,
	.condition {
		box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
		padding: 5px 15px;
		border-radius: 5px;
		background-color: whitesmoke;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5px;
		position: relative;
		user-select: none;
		svg {
			margin-top: 2px;
		}
		&:hover {
			cursor: pointer;
		}
		ul {
			position: absolute;
			justify-content: center;
			flex-direction: column;
			z-index: 1;
			border-radius: 5px;
			min-width: 100%;
			gap: 3px;
			padding: 10px 0;
			box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
			width: max-content;
			background-color: #f8f8f8;
			li {
				width: 100%;
				padding: 5px 20px;
				text-align: start;
				&:hover {
					background-color: ${({ theme }) => theme.secondary};
				}
			}
		}
	}
	.sortBy {
		ul {
			bottom: -150px;
			display: ${({ showSortingOptions }) => (showSortingOptions ? 'flex' : 'none')};
		}
	}
	.condition {
		ul {
			bottom: -118px;
			display: ${({ showConditionOptions }) => (showConditionOptions ? 'flex' : 'none')};
		}
	}
`;
