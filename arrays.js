// const studentNames = ['John', 'Mary', 'Obi', 'Ozo', 'Henry'];

// function student(allStudents, studentName) {
// 	const name = studentName.toLowerCase();

// 	for (const student of allStudents) {
// 		if (student.toLowerCase() === name) return allStudents.indexOf(student);
// 	}
// }

// console.log(student(studentNames, 'ozo'));

// ---------------------------------------------------------
// ---------------------------------------------------------
/**
 *
 * task: get the index of the values in the array that sum up the target number
 * [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * target number = 10
 * return [5, 8]
 */
function twoSum(array, targetNum) {
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] + array[j] === targetNum) {
				return [i, j];
			}
		}
	}
}

console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 15));

// ---------------------------------------------------------
// ---------------------------------------------------------

/**
 * task: remove even numbers from an array
 * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * [2,4, 6, 8, 10]
 *
 * algorithm
 * - create an empty odd number arr
 * - loop through the array
 * - check to see if the value is an odd number
 * - add the value to the odd number arr if the value is an odd number
 * - return the odd number arr
 */

// average time: 22ms
const removeEvenNum = (arr) => {
	if (arr.length === 0) return console.log('No element in the array');
	const oddNumArr = [];
	let indexCount = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 !== 0) {
			oddNumArr[indexCount] = arr[i];
			indexCount++;
		}
	}

	return oddNumArr;
};

// average time: 22ms
const removeEvenNum2 = (arr) => {
	if (arr.length === 0) return console.log('No element in the array');
	const oddNumArr = [];
	// let indexCount = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 !== 0) {
			oddNumArr.push(arr[i]);
			// oddNumArr[indexCount] = arr[i];
			// indexCount++;
		}
	}

	return oddNumArr;
};

// console.time('time');
// console.log(removeEvenNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.timeEnd('time');

// console.time('time');
// console.log(removeEvenNum2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.timeEnd('time');
// ---------------------------------------------------------------
// ---------------------------------------------------------------

/**
 * task: swap the numbers in the array
 * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
 *
 * algorithm
 * - get the first value in the array
 * - get the last value in the array
 * - put the first value in the last value's position
 * - put the last value in the first value's position
 * - move to the second value in the array
 * - move to the second to last value in the array
 * - repeat steps 3 and 4 until all values position is swapped
 */

// average time: 23ms
const reverseArray = (arr, start, end = arr.length - 1) => {
	if (arr.length === 0) return console.log('No element in the array');
	let index;

	while (start < end) {
		index = arr[start];
		arr[start] = arr[end];
		arr[end] = index;

		start++;
		end--;
	}

	return arr;
};

// average time: 22ms
const reverseArray2 = (arr, start, end = arr.length - 1) => {
	if (arr.length === 0) return console.log('No element in the array');
	// let index;

	while (start < end) {
		let index = arr[start];
		arr[start] = arr[end];
		arr[end] = index;

		start++;
		end--;
	}

	return arr;
};
// console.time('time');
// console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0));
// console.timeEnd('time');

// console.time('time');
// console.log(reverseArray2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0));
// console.timeEnd('time');

// --------------------------------------------------------------
// --------------------------------------------------------------

/**
 * task: fnd the minimum value in an array
 * [10, 22, 3, 42, 51, 1, 0, 18, 19, 100] min value = 0
 *
 * algorithm
 * - get the first value in the array
 * - store the value in a variable called minValue
 * - loop through the array to get each value
 * - compare each value to the minvalue variable
 * - if the value is smaller than the minValue, replace the minValue with the array value
 * - return the minValue
 */

// average time: 19ms
const getMinValue = (arr) => {
	if (arr.length === 0) return console.log('No element in the array');
	let count = 1;
	let minValue = arr[0];

	while (count < arr.length) {
		if (minValue > arr[count]) {
			minValue = arr[count];
		}

		count++;
	}

	return minValue;
};

// average time: 19ms
const getMinValue2 = (arr) => {
	if (arr.length === 0) return console.log('No element in the array');
	let minValue = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (minValue > arr[i]) {
			minValue = arr[i];
		}
	}

	return minValue;
};

// console.time('time');
// console.log(getMinValue([0, 22, 3, 42, 51, 1, -12, -1, 18, 19, 100]));
// console.timeEnd('time');

// console.time('time');
// console.log(getMinValue2([0, 22, 3, 42, 51, 1, -12, -1, 18, 19, 100]));
// console.timeEnd('time');

// --------------------------------------------------------------
// --------------------------------------------------------------
/**
 * task: get the second maximum value
 * [21, 2, 3, 4, 5, 6, 7, 8, 10, 9, 10];
 *
 * return 9;
 *
 * algorithm
 * - create a variable maxValue and pass the first element in the array as the value
 * - loop through the array to get each element
 * - compare each element with the variable maxValue
 * - replace the value if the variable is lower than the element
 * -
 */

const secondMaxValue = (arr) => {
	let maxValue = 1;
	let secondMaxValue = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > maxValue) {
			secondMaxValue = maxValue;
			maxValue = arr[i];
		} else if (arr[i] > secondMaxValue && arr[i] !== maxValue) {
			secondMaxValue = arr[i];
		}
	}

	return secondMaxValue;
};

// console.time('time');
// console.log(secondMaxValue([21, 2, 3, 4, 5, 6, 7, 8, 10, 9, 10]));
// console.timeEnd('time');

// --------------------------------------------------------------
// --------------------------------------------------------------

/**
 * task: move all zeros to the end of the array
 * [1, 2, 3, 0, 5, 0, 0, 4, 0, 0, 10];
 *
 * return [1, 2, 3, 10, 5, 4, 0, 0, 0, 0, 0];
 *
 * algorithm
 * - create a variable to store the index value
 * - create a variable to store the element's value
 * - loop through the array
 * - if value is not equal to zero increase the index value
 */

const moveZeroToEndOfArray = (arr) => {
	let zeroValue;
	let index = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== 0) {
			index++;
		}
		if (arr[i] === 0) {
			zeroValue = arr[i];
			index++;
		}
	}

	return arr;
};

// console.log(moveZeroToEndOfArray([1, 2, 3, 0, 5, 0, 4, 0, 10]));
// --------------------------------------------------------------
// --------------------------------------------------------------
class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	push(value) {
		this.data[this.length] = value;
		this.length++;

		return value;
	}

	get(index) {
		return this.data[index];
	}

	pop() {
		const deletedValue = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;

		return deletedValue;
	}

	shift() {
		const deletedValue = this.data[0];
		for (let i = 0; i < this.length; i++) {
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.length - 1];
		this.length--;

		return deletedValue;
	}

	delete(index) {
		const deletedValue = this.data[index];
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.length - 1];
		this.length--;

		return deletedValue;
	}
}

// const newArray = new MyArray();
// console.log(newArray.push('Jonah'));
// console.log(newArray.push('Peter'));
// console.log(newArray.push('John'));
// console.log(newArray.push('Maggie'));
// console.log(newArray.get(1));
// // console.log(newArray.shift());
// console.log(newArray);
// console.log(newArray.delete(1));
// console.log(newArray);
