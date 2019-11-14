import React from 'react';
import Chart from 'chart.js';
import 'chartjs-plugin-labels';
import options from './chartsOptions';
import { onPieClick } from './chartsUtils';

const SecondPie = () => {
	const canvas = React.useRef(null);
	let pieChart = null;

	const data = {
		datasets: [
			{
				data: [ 10, 100 ],
				backgroundColor: [ '#B0BF1A', '#007ED6', '#52D726', '#FF0000' ]
			}
		],
		labels: [ 'invoice-ap-workflow', 'creditnote-ap-workflow' ]
	};

	const renderPie = React.useCallback(
		() => {
			if (canvas.current) {
				const ctx = canvas.current.getContext('2d');
				pieChart = new Chart(ctx, {
					type: 'pie',
					data,
					options
				});
			}
		},
		[ canvas ]
	);

	// const onPieClick = () => {
	// 	canvas.current.onclick = evt => {
	// 		const activePoints = pieChart.getElementsAtEvent(evt);
	// 		if (activePoints[0]) {
	// 			const chartData = activePoints[0]['_chart'].config.data;
	// 			const idx = activePoints[0]['_index'];

	// 			const label = chartData.labels[idx];
	// 			const value = chartData.datasets[0].data[idx];

	// 			const url = 'label' + label + '&value=' + value;
	// 			console.log(url);
	// 		}
	// 	};
	// };

	const renderWrapper = () => <canvas ref={canvas} />;

	React.useEffect(
		() => {
			if (canvas.current) {
				renderPie();
				onPieClick({ canvas, pieChart });
			}
		},
		[ canvas ]
	);

	return renderWrapper();
};

export default SecondPie;
