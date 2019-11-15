import React from 'react';
import Chart from 'chart.js';
import 'chartjs-plugin-labels';
import options from './chartsOptions';
import { onPieClick } from './chartsUtils';

const SecondPie = () => {
	const canvas = React.useRef(null);
	const pieChart = React.useRef(null);

	const renderPie = React.useCallback(
		() => {
			if (canvas.current) {
				const data = {
					datasets: [
						{
							data: [ 10, 100 ],
							backgroundColor: [ '#B0BF1A', '#007ED6', '#52D726', '#FF0000' ]
						}
					],
					labels: [ 'invoice-ap-workflow', 'creditnote-ap-workflow' ]
				};
				const ctx = canvas.current.getContext('2d');
				pieChart.current = new Chart(ctx, {
					type: 'pie',
					data,
					options
				});
			}
		},
		[ canvas ]
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

export default SecondPie;
