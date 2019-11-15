import React from 'react';
import vis from 'vis-network';
import './network.css';

const NetworkChart = () => {
	console.log({ vis });
	let newtork = null;
	let container;

	const createNetwork = () => {
		container = document.getElementById('networkWrapper');
		//const data = vis.parseDOTNetwork(dot);
		const data = { "nodes": [{ "id": "start", "label": "start" }, { "id": "end", "label": "end" }, { "id": "emitDocumentEvent", "label": "emitDocumentEvent" }, { "id": "dispatch", "label": "dispatch" }, { "id": "removeTag0", "label": "removeTag0" }, { "id": "extensibilityPointCallout", "label": "extensibilityPointCallout" }, { "id": "removeTag1", "label": "removeTag1" }, { "id": "purchaseOrderResolving", "label": "purchaseOrderResolving" }, { "id": "assignmentTypeGetter", "label": "assignmentTypeGetter" }, { "id": "preCoding", "label": "preCoding" }, { "id": "voidDocument", "label": "voidDocument" }, { "id": "copyCoding", "label": "copyCoding" }, { "id": "Matching", "label": "Matching" }, { "id": "acceptDocument", "label": "acceptDocument" }, { "id": "matchingServiceRouting", "label": "matchingServiceRouting" }, { "id": "adaCodingUpdate", "label": "adaCodingUpdate" }, { "id": "Coding", "label": "Coding" }, { "id": "rejectToSupplier", "label": "rejectToSupplier" }, { "id": "documentResource", "label": "documentResource" }, { "id": "contractQuantity", "label": "contractQuantity" }, { "id": "Coding0", "label": "Coding0" }, { "id": "rejectDocument", "label": "rejectDocument" }, { "id": "checkIfOrgsSettingEnabled", "label": "checkIfOrgsSettingEnabled" }, { "id": "checkAmounts", "label": "checkAmounts" }, { "id": "adaCodingSuggest", "label": "adaCodingSuggest" }, { "id": "extensibilityPoint", "label": "extensibilityPoint" }, { "id": "checkIfAppSettingEnabled", "label": "checkIfAppSettingEnabled" }, { "id": "decisionServiceMatching", "label": "decisionServiceMatching" }, { "id": "checkLineReferences", "label": "checkLineReferences" }, { "id": "codingDetection", "label": "codingDetection" }, { "id": "contractMatching", "label": "contractMatching" }, { "id": "externalValidation", "label": "externalValidation" }, { "id": "removeTag", "label": "removeTag" }, { "id": "addTag0", "label": "addTag0" }, { "id": "ContractCopyCoding", "label": "ContractCopyCoding" }, { "id": "clearWorkflowData", "label": "clearWorkflowData" }, { "id": "forwarding", "label": "forwarding" }, { "id": "poNonPoRouting", "label": "poNonPoRouting" }, { "id": "addTag", "label": "addTag" }, { "id": "copyCoding0", "label": "copyCoding0" }, { "id": "MatchingException", "label": "MatchingException" }], "edges": [{ "from": "purchaseOrderResolving", "to": "decisionServiceMatching", "label": "NO_PO_FOUND", "arrows": "to" }, { "from": "checkAmounts", "to": "externalValidation", "label": "AMOUNTCHECK_SUCCESS", "arrows": "to" }, { "from": "matchingServiceRouting", "to": "dispatch", "label": "WorkflowMatching", "arrows": "to" }, { "from": "preCoding", "to": "rejectDocument", "label": "REJECT", "arrows": "to" }, { "from": "removeTag", "to": "checkAmounts", "label": "()", "arrows": "to" }, { "from": "start", "to": "checkIfOrgsSettingEnabled", "label": "()", "arrows": "to" }, { "from": "preCoding", "to": "Coding", "label": "CONTINUE", "arrows": "to" }, { "from": "voidDocument", "to": "emitDocumentEvent", "label": "()", "arrows": "to" }, { "from": "adaCodingUpdate", "to": "checkIfAppSettingEnabled", "label": "SKIPPED_FAILED", "arrows": "to" }, { "from": "assignmentTypeGetter", "to": "MatchingException", "label": "ASSIGNMENT_TYPE_FOUND", "arrows": "to" }, { "from": "MatchingException", "to": "externalValidation", "label": "APPROVED", "arrows": "to" }, { "from": "removeTag0", "to": "end", "label": "()", "arrows": "to" }, { "from": "Coding", "to": "voidDocument", "label": "VOIDED", "arrows": "to" }, { "from": "decisionServiceMatching", "to": "assignmentTypeGetter", "label": "MATCHING_FAILED", "arrows": "to" }, { "from": "checkLineReferences", "to": "Coding0", "label": "NON_PO_LINE_FOUND", "arrows": "to" }, { "from": "copyCoding0", "to": "copyCoding0", "label": "RECOVERABLE_ERROR", "arrows": "to" }, { "from": "codingDetection", "to": "purchaseOrderResolving", "label": "()", "arrows": "to" }, { "from": "checkIfOrgsSettingEnabled", "to": "addTag0", "label": "ENABLED", "arrows": "to" }, { "from": "checkLineReferences", "to": "externalValidation", "label": "NON_PO_LINE_NOT_FOUND", "arrows": "to" }, { "from": "extensibilityPoint", "to": "removeTag0", "label": "SKIP_FLOW", "arrows": "to" }, { "from": "contractQuantity", "to": "acceptDocument", "label": "CONTRACT_QUANTITY_UPDATE_SKIPPED", "arrows": "to" }, { "from": "extensibilityPoint", "to": "removeTag", "label": "SKIP_AND_ACCEPT", "arrows": "to" }, { "from": "copyCoding", "to": "copyCoding", "label": "RECOVERABLE_ERROR", "arrows": "to" }, { "from": "checkAmounts", "to": "externalValidation", "label": "ACCEPT", "arrows": "to" }, { "from": "MatchingException", "to": "voidDocument", "label": "VOIDED", "arrows": "to" }, { "from": "copyCoding0", "to": "adaCodingSuggest", "label": "Success", "arrows": "to" }, { "from": "emitDocumentEvent", "to": "end", "label": "()", "arrows": "to" }, { "from": "MatchingException", "to": "rejectDocument", "label": "REJECTED", "arrows": "to" }, { "from": "Coding0", "to": "rejectDocument", "label": "REJECTED", "arrows": "to" }, { "from": "Coding", "to": "rejectDocument", "label": "REJECTED", "arrows": "to" }, { "from": "Matching", "to": "dispatch", "label": "NEW_ORDER", "arrows": "to" }, { "from": "externalValidation", "to": "contractQuantity", "label": "EXTERNAL_ACCEPTED", "arrows": "to" }, { "from": "poNonPoRouting", "to": "dispatch", "label": "OUTCOME_NON_PO_FLOW", "arrows": "to" }, { "from": "dispatch", "to": "documentResource", "label": "TO_FORWARDING", "arrows": "to" }, { "from": "poNonPoRouting", "to": "codingDetection", "label": "OUTCOME_PO_FLOW", "arrows": "to" }, { "from": "checkIfAppSettingEnabled", "to": "forwarding", "label": "ENABLED", "arrows": "to" }, { "from": "decisionServiceMatching", "to": "externalValidation", "label": "MATCHING_SUCCEEDED", "arrows": "to" }, { "from": "checkAmounts", "to": "rejectDocument", "label": "REJECT", "arrows": "to" }, { "from": "extensibilityPoint", "to": "removeTag1", "label": "PROCEED_FLOW", "arrows": "to" }, { "from": "documentResource", "to": "checkIfAppSettingEnabled", "label": "TO_FORWARDING", "arrows": "to" }, { "from": "ContractCopyCoding", "to": "contractMatching", "label": "()", "arrows": "to" }, { "from": "checkIfAppSettingEnabled", "to": "emitDocumentEvent", "label": "DISABLED", "arrows": "to" }, { "from": "adaCodingSuggest", "to": "addTag", "label": "SKIPPED_FAILED", "arrows": "to" }, { "from": "contractMatching", "to": "matchingServiceRouting", "label": "CONTRACT_MATCHING_SKIPPED", "arrows": "to" }, { "from": "contractMatching", "to": "matchingServiceRouting", "label": "CONTRACT_MATCHING_SUCCEEDED", "arrows": "to" }, { "from": "clearWorkflowData", "to": "emitDocumentEvent", "label": "()", "arrows": "to" }, { "from": "removeTag1", "to": "ContractCopyCoding", "label": "()", "arrows": "to" }, { "from": "checkIfOrgsSettingEnabled", "to": "ContractCopyCoding", "label": "DISABLED", "arrows": "to" }, { "from": "rejectDocument", "to": "clearWorkflowData", "label": "()", "arrows": "to" }, { "from": "checkLineReferences", "to": "externalValidation", "label": "NON_PO_LINE_CHECK_NOT_ENABLED", "arrows": "to" }, { "from": "forwarding", "to": "emitDocumentEvent", "label": "()", "arrows": "to" }, { "from": "matchingServiceRouting", "to": "poNonPoRouting", "label": "DecisionServiceMatching", "arrows": "to" }, { "from": "addTag0", "to": "extensibilityPointCallout", "label": "()", "arrows": "to" }, { "from": "contractQuantity", "to": "acceptDocument", "label": "CONTRACT_QUANTITY_UPDATED", "arrows": "to" }, { "from": "contractQuantity", "to": "rejectDocument", "label": "CONTRACT_QUANTITY_UPDATE_FAILED", "arrows": "to" }, { "from": "extensibilityPointCallout", "to": "extensibilityPoint", "label": "()", "arrows": "to" }, { "from": "decisionServiceMatching", "to": "decisionServiceMatching", "label": "PREPARING_GRAPH", "arrows": "to" }, { "from": "Matching", "to": "checkLineReferences", "label": "SUCCEEDED", "arrows": "to" }, { "from": "dispatch", "to": "copyCoding", "label": "USER_AND_PO", "arrows": "to" }, { "from": "purchaseOrderResolving", "to": "copyCoding0", "label": "PO_FOUND", "arrows": "to" }, { "from": "Coding", "to": "checkAmounts", "label": "APPROVED", "arrows": "to" }, { "from": "dispatch", "to": "Coding", "label": "USER_BUT_NO_PO", "arrows": "to" }, { "from": "Matching", "to": "rejectDocument", "label": "REJECTED", "arrows": "to" }, { "from": "adaCodingSuggest", "to": "addTag", "label": "SKIPPED_DISABLED", "arrows": "to" }, { "from": "dispatch", "to": "rejectDocument", "label": "NO_USER", "arrows": "to" }, { "from": "adaCodingSuggest", "to": "addTag", "label": "SUCCESS", "arrows": "to" }, { "from": "Matching", "to": "voidDocument", "label": "VOIDED", "arrows": "to" }, { "from": "contractMatching", "to": "rejectDocument", "label": "CONTRACT_MATCHING_FAILED", "arrows": "to" }, { "from": "Coding0", "to": "voidDocument", "label": "VOIDED", "arrows": "to" }, { "from": "copyCoding", "to": "Matching", "label": "Success", "arrows": "to" }, { "from": "rejectToSupplier", "to": "rejectDocument", "label": "()", "arrows": "to" }, { "from": "externalValidation", "to": "preCoding", "label": "EXTERNAL_REJECTED", "arrows": "to" }, { "from": "addTag", "to": "decisionServiceMatching", "label": "()", "arrows": "to" }, { "from": "acceptDocument", "to": "adaCodingUpdate", "label": "()", "arrows": "to" }, { "from": "externalValidation", "to": "rejectToSupplier", "label": "EXTERNAL_REJECTEDTOSUPPLIER", "arrows": "to" }, { "from": "Coding0", "to": "externalValidation", "label": "APPROVED", "arrows": "to" }, { "from": "adaCodingUpdate", "to": "checkIfAppSettingEnabled", "label": "SUCCESS", "arrows": "to" }, { "from": "checkAmounts", "to": "externalValidation", "label": "AMOUNTCHECK_DISABLED", "arrows": "to" }], "options": {} }
		const options = {
			autoResize: true,
			height: '100%',
			width: '100%',

			// nodes: {
			//   interaction: { hover: true }     
			//  },
			// edges: {
			//     font: { align: "bottom" }
			//},
			layout: {
				//hierarchical: {
				//direction: "LR",
				// sortMethod: "directed",
				// edgeMinimization: false,
				//shakeTowards: "leaves",
				//nodeSpacing: 3000
				// }
			},
			physics: {
				//repulsion: {
				//avoidOverlap: 1,
				//nodeDistance: 10000,
				//centralGravity: 0.0,
				//springLength: 1000
				//}
				barnesHut: {
					avoidOverlap: 1,
					centralGravity: 0.0,
					springLength: 500
				}
			},

			interaction: {
				zoomView: true,
				hover: true,
				selectable: true,
				multiselect: true
			}
		}

		console.log(`TCL: NetworkChart -> container.createNetwork`, container);

		const network = new vis.Network(container, data, options);

		network.body.emitter.emit('_dataChanged');
		network.redraw();
		network.on('click', function(properties) {
			console.log(`TCL: createNetwork -> properties`, properties);
			const edges = properties.edges;
			const node = properties.nodes[0];
			console.log('clicked node:', node);
			console.log('clicked edges:', edges);
		});

		console.log("Subnetwork test: ", filterSubNetwork(data.nodes[2], data.edges, data.nodes))
	};
	

	React.useEffect(
		() => {
			createNetwork();
		},
		[container]
	);

	return <div id={'networkWrapper'} />;
};


const filterSubNetwork = (selectednNode, edges, nodes) => {

	var remainingNodes = [];
	var remainingEdges = [];

	edges.forEach(edge => {
		if (edge.from === selectednNode.id || edge.to === selectednNode.id) {
			remainingEdges.push(edge)
		}
	});

	remainingNodes.push(selectednNode);
	remainingEdges.forEach(edge => {
		nodes.forEach(node => {
			if ((edge.from === node.id || edge.to === node.id) && !(node.id === selectednNode.id)) {
				remainingNodes.push(node);
			}
		})
	})


	return { "nodes": remainingNodes, "edges": remainingEdges };
}

export default NetworkChart;
