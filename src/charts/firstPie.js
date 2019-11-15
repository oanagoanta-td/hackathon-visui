import React from 'react';
import Chart from 'chart.js';
import 'chartjs-plugin-labels';
import { instanceStatus } from '../models/instanceStatus';
import options from './chartsOptions';
import { onPieClick } from './chartsUtils';

const FirstPie = () => {
	const canvas = React.useRef(null);
	let pieChart = React.useRef(null);

	const renderPie = React.useCallback(
		() => {
			if (canvas.current) {
				const data = {
					datasets: [
						{
							data: [ 300, 50, 100, 50 ],
							backgroundColor: [ '#B0BF1A', '#007ED6', '#52D726', '#FF0000' ]
						}
					],
					labels: [
						instanceStatus.pending,
						instanceStatus.active,
						instanceStatus.completed,
						instanceStatus.error
					]
				};
				const ctx = canvas.current.getContext('2d');
				pieChart.current = new Chart(ctx, {
					type: 'pie',
					data,
					options
				});
			}
		},
		[ canvas, pieChart ]
	);

	const renderWrapper = () => <canvas ref={canvas} />;

	React.useEffect(
		() => {
			if (canvas.current) {
				renderPie();
				onPieClick({ canvas, pieChart: pieChart.current });
			}
		},
		[ canvas, renderPie ]
	);

	return renderWrapper();
};

export default FirstPie;
