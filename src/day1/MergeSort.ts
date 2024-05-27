function merge(arr: number[], lo: number, mid: number, hi: number): void {
    // Length of both sorted aub arrays
    let l1 = mid - lo + 1;
    let l2 = hi - mid;
    // Create new subarrays
    let arr1 = new Array(l1);
    let arr2 = new Array(l2);

    // Assign values in subarrays
    for (let i = 0; i < l1; ++i) {
        arr1[i] = arr[lo + i];
    }
    for (let i = 0; i < l2; ++i) {
        arr2[i] = arr[mid + 1 + i];
    }

    // To travesrse and modify main array
    let i = 0,
        j = 0,
        k = lo;

    // Assign the smaller value for sorted output
    while (i < l1 && j < l2) {
        if (arr1[i] < arr2[j]) {
            arr[k] = arr1[i];
            ++i;
        } else {
            arr[k] = arr2[j];
            j++;
        }
        k++;
    }
    // Update the remaining elements
    while (i < l1) {
        arr[k] = arr1[i];
        i++;
        k++;
    }
    while (j < l2) {
        arr[k] = arr2[j];
        j++;
        k++;
    }
}

function sort(arr: number[], lo: number, hi: number): void {
    // base case
    if (lo >= hi) return;

    let mid = Math.floor(lo + (hi - lo) / 2);
    console.log(lo, mid, hi);

    sort(arr, lo, mid);
    sort(arr, mid + 1, hi);
    merge(arr, lo, mid, hi);
}

export default function merge_sort(arr: number[]): void {
    sort(arr, 0, arr.length - 1);
}

// Example
// [4,5,2,8,3,4,7]
// lo = 0, hi = 6, mid = 3
    // lo = 0, hi = 3, mid = 1
        // lo = 0, hi = 1, mid = 0
        // lo = 2, hi = 3, mid = 2
    // lo = 4, hi = 6, mid = 5
        // lo = 4, hi = 5, mid = 4