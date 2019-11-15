import vis from 'vis-network';
import dot from './dot.json';
import './network.css';

export const createNetwork = ({ container, inputData = null }) => {
	let nodes;
	let edges;

	if (inputData) {
		nodes = inputData.nodes;
		edges = inputData.edges;
	} else {
		dot.nodes.forEach(node => {
			console.log(`TCL: createNetwork -> node`, node);
			if (node.id === 'start') {
				node.color = 'yellow';
				node.shape = 'box';
			}
			if (node.id === 'end') {
				node.color = 'lightgreen';
				node.shape = 'box';
			}
		});
		nodes = dot.nodes;
		edges = dot.edges;
	}

	const data = {
		nodes,
		edges
	};
	const options = {
		autoResize: true,
		height: '100%',
		width: '100%',
		nodes: {
			// shape: 'square',
			color: {
				hover: 'lightblue'
			}
		},
		physics: {
			barnesHut: {
				avoidOverlap: 1,
				centralGravity: 0.0,
				springLength: 500
			}
		},
		interaction: {
			zoomView: true,
			hover: true,
			selectable: true
		}
	};

	const network = new vis.Network(container, data, options);

	network.body.emitter.emit('_dataChanged');
	network.redraw();
	return { network, nodes, edges };

	// console.log('Subnetwork test: ', filterSubNetwork(data.nodes[2], data.edges, data.nodes));
};
