import React from 'react';
import PieCharts from '../charts/pieCharts';
import NetworkChart from '../charts/network';

const Dashboard = () => {
	return (
		<div>
			<PieCharts />
			<NetworkChart />
		</div>
	);
};

export default Dashboard;
