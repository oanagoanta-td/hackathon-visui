export const onLegendClick = (evt, legendItem) => {
	console.log('LABEL CLICKED', legendItem);
};

export const onPieClick = ({ canvas, pieChart }) => {
	canvas.current.onclick = evt => {
		const activePoints = pieChart.getElementsAtEvent(evt);
		if (activePoints[0]) {
			const chartData = activePoints[0]['_chart'].config.data;
			const idx = activePoints[0]['_index'];

			const label = chartData.labels[idx];
			const value = chartData.datasets[0].data[idx];

			const url = 'label' + label + '&value=' + value;
			console.log(url);
		}
	};
};
