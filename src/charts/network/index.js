import { createNetwork } from './createNetwork';
import React from 'react';
import './network.css';

const NetworkChart = () => {
	const container1 = React.useRef(null);
	const container2 = React.useRef(null);
	const network1 = React.useRef(null);
	const network2Data = React.useRef({});

	const getNodeByLabel = (id, nodes) => {
		return nodes.find(node => {
			return node.label.toLowerCase() === id.toLowerCase();
		});
	};

	const filterSubNetwork = (currentNode, edges, nodes) => {
		var remainingNodes = [];
		var remainingEdges = [];

		edges.forEach(edge => {
			if (edge.from === currentNode.id || edge.to === currentNode.id) {
				remainingEdges.push(edge);
			}
		});

		remainingNodes.push(currentNode);
		remainingEdges.forEach(edge => {
			nodes.forEach(node => {
				if ((edge.from === node.id || edge.to === node.id) && node.id !== currentNode.id) {
					node.color = '#97C2FC';
					remainingNodes.push(node);
				}
			});
		});
		const nodDupesNodes = [ ...new Set(remainingNodes) ];
		console.log(`TCL: filterSubNetwork -> nodDupesNodes`, nodDupesNodes);
		nodDupesNodes[0].color = 'red';
		return { nodes: nodDupesNodes, edges: remainingEdges };
	};

	const onClickNetwork1 = React.useCallback(({ network, nodes, edges }) => {
		network.on('click', function(properties) {
			if (properties.nodes.length === 0) {
				return;
			}
			const node = properties.nodes[0];
			const currentNode = getNodeByLabel(node, nodes);
			network2Data.current = filterSubNetwork(currentNode, edges, nodes);
			if (container2.current && network2Data.current) {
				console.log(`TCL: NetworkChart -> network2Data.current`, network2Data.current);
				createNetwork({ container: container2.current, inputData: network2Data.current });
			}
		});
	}, []);

	React.useEffect(
		() => {
			container1.current = document.getElementById('networkWrapper-1');
			container2.current = document.getElementById('networkWrapper-2');
			if (container1.current) {
				network1.current = createNetwork({ container: container1.current });
				onClickNetwork1(network1.current);
			}
		},
		[ container1, container2, onClickNetwork1 ]
	);

	return (
		<div className={'networkWrapper'}>
			<div className={'title'}>
				<div className={'subtitle'}>
					<h3>Full Config </h3>
					<p>Click on a node to see config</p>
				</div>{' '}
				<h3>Config Zoom In</h3>
			</div>
			<div id={'networkWrapper-1'} />
			<div id={'networkWrapper-2'} />
		</div>
	);
};

export default NetworkChart;
