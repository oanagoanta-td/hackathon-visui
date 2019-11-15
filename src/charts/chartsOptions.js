import { onLegendClick } from './chartsUtils';

export default {
	plugins: {
		labels: [
			// {
			// 	render: 'label',
			// 	position: 'outside',
			// 	textMargin: 5
			// },
			{
				render: 'percentage',
				fontColor: 'white',
				fontSize: '19',
				textShadow: true,
				fontStyle: 'bold'
			}
		]
	},
	responsive: true,
	animation: {
		animateScale: true,
		animateRotate: true
	},
	legend: {
		display: true,
		position: 'bottom',
		onClick: onLegendClick,
		align: 'center',
		labels: {
			fontSize: 19
		}
	}
};
