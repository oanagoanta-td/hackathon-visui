import React from 'react';
import FirstPie from './firstPie';
import SecondPie from './secondPie';
import './pieCharts.css';

const PieCharts = () => {
	return (
		<div className={'pie-charts-wrapper'}>
			<FirstPie />
			<SecondPie />
		</div>
	);
};

export default PieCharts;
