import React, { useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Filters = ({ showFilters, setShowFilters, showConditions, setShowConditions }) => {
	const [filterValue, setFilterValue] = useState('');
	const [conditionValue, setConditionValue] = useState('');

	return (
		<StyledFilters showConditions={showConditions} showFilters={showFilters}>
			<div className='condition' onClick={() => setShowConditions(!showConditions)}>
				{conditionValue ? `condition: ${conditionValue}` : 'condition'}
				{showConditions ? <IoIosArrowUp /> : <IoIosArrowDown />}
				<ul>
					<li onClick={(e) => setConditionValue(e.target.innerText)}>Any</li>
					<li onClick={(e) => setConditionValue(e.target.innerText)}>New</li>
					<li onClick={(e) => setConditionValue(e.target.innerText)}>Used</li>
				</ul>
			</div>

			<div className='filterBy' onClick={() => setShowFilters(!showFilters)}>
				{filterValue || 'Filter By'} {showFilters ? <IoIosArrowUp /> : <IoIosArrowDown />}
				<ul>
					<li onClick={(e) => setFilterValue(e.target.innerText)}>Date: Newest</li>
					<li onClick={(e) => setFilterValue(e.target.innerText)}>Date: Oldest</li>
					<li onClick={(e) => setFilterValue(e.target.innerText)}>Price: Highest</li>
					<li onClick={(e) => setFilterValue(e.target.innerText)}>Price: Lowest</li>
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
	.filterBy,
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
	.filterBy {
		ul {
			bottom: -150px;
			display: ${({ showFilters }) => (showFilters ? 'flex' : 'none')};
		}
	}
	.condition {
		ul {
			bottom: -118px;
			display: ${({ showConditions }) => (showConditions ? 'flex' : 'none')};
		}
	}
`;
