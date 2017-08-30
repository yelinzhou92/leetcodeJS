function quickSort(arr, left, right) {
	const len = arr.length;
	let pivot;
	let partitionIndex;

	if (left < right) {
		pivot = right;
		partitionIndex = partition(arr, pivot, left, right);

		quickSort(arr, left, partitionIndex - 1);
		quickSort(arr, partitionIndex + 1, right);
	}

	return arr;
}

function partition(arr, pivot, left, right) {
	const pivotValue = arr[pivot];
	let partitionIndex = left;

	for (let i = left; i < right; i++) {
		if (arr[i] < pivotValue) {
			swap(arr, i, partitionIndex);
			partitionIndex ++;
		}
	}
	swap(arr, right, partitionIndex);
	return partitionIndex;
}

function swap(arr, i, j) {
	let tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}

console.log(quickSort([6,5,7,1,4,3,9,12,0,3], 0, 9));