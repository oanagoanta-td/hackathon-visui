import React from 'react';
import Chart from 'chart.js';
import 'chartjs-plugin-labels';
import { instanceStatus } from '../models/instanceStatus';
import options from './chartsOptions';
import { onPieClick } from './chartsUtils';

const FirstPie = () => {
	const canvas = React.useRef(null);
	let pieChart = null;
	const data = {
		datasets: [
			{
				data: [ 300, 50, 100, 50 ],
				backgroundColor: [ '#B0BF1A', '#007ED6', '#52D726', '#FF0000' ]
			}
		],
		labels: [ instanceStatus.pending, instanceStatus.active, instanceStatus.completed, instanceStatus.error ]
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

export default FirstPie;
