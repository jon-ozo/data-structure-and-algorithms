// linked list is a collecton of lineraly linked nodes. Each
// node is a collection of data i.e a value and a
// reference. the reference could be a pointer to
// another node or null.

// class Node {
// 	constructor(value) {
// 		this.value = value;
// 		this.next = null;
// 	}
// }

// class LinkedList {
// 	constructor(value) {
// 		this.head = new Node(value);
// 		this.tail = this.head;
// 		this.length = 1;
// 	}
// }

// const newLinkedList = new LinkedList(1);
// console.log(newLinkedList);

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
	push(prevNode, value) {
		prevNode.next = new Node(value);

		return new Node(value);
	}
}

// const node1 = new Node('Node 1');
// const node2 = new Node('Node 2');
// const node3 = new Node('Node 3');
// const node4 = new Node('Node 4');
// const node5 = new Node('Node 5');

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;
// console.log(node2);
// --------------------------------------------------------------
// ==============================================================

// getting the sum of the linked list value
const node1 = new Node('1');
const node2 = new Node('2');
const node3 = new Node('3');
const node4 = new Node('4');
const node5 = new Node('5');

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// assignments
// find target function findTarget(head, target)
// get index function getNode(head, index)

// using while loop
// function linkedListSum(head) {
// 	let current = head;
// 	let sum = 0;

// 	while (current !== null) {
// 		sum += parseInt(current.value);
// 		current = current.next;
// 	}

// 	return sum;
// }

// using recursion
// function linkedListSum(head) {
// 	if (head === null) return 0;

// 	return parseInt(head.value) + linkedListSum(head.next);
// }

// console.log(linkedListSum(node1));
// ------------------------------------------------------
// ======================================================

// adding linked list values into an array
// using recursion (not recommended style)
// const arr = [];
// function linkedListArray(head) {
// 	if (head !== null) {
// 		arr.push(head.value);
// 		linkedListArray(head.next);
// 	}

// 	return arr;
// }

// using recursion (recommended)
// function linkedListArray(head) {
// 	const arrItem = [];
// 	addElementsToArray(head, arrItem);

// 	return arrItem;
// }

// function addElementsToArray(head, arrItem) {
// 	if (head === null) return;

// 	arrItem.push(head.value);
// 	addElementsToArray(head.next, arrItem);
// }

// using while loop
// function linkedListArray(head) {
// 	let current = head;
// 	const arr = [];

// 	while (current !== null) {
// 		arr.push(current.value);
// 		current = current.next;
// 	}

// 	return arr;
// }
// console.log(linkedListArray(node1));
// -------------------------------------------------------------
// =============================================================

// print linked list
// using recursion
// function printLinkedList(head) {
// 	if (head === null) return;

//   console.log(head.value);
//   printLinkedList(head.next);
// }

// using while loop
// function printLinkedList(head) {
// 	let current = head;

// 	while (current !== null) {
// 		console.log(current.value);
// 		current = current.next;
// 	}
// }
// console.log(printLinkedList(node1));
