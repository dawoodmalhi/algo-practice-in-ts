function partition(arr: number[], lo: number, hi: number): number {
    // choosing pivot point
    // This can be any point, but we are selecting last element every time
    const pivot = arr[hi];

    let swapIndex = lo - 1;

    // shifting small elements on the left
    for (let i = lo; i < hi; ++i) {
        if (arr[i] <= pivot) {
            ++swapIndex;
            const tmp = arr[i];
            arr[i] = arr[swapIndex];
            arr[swapIndex] = tmp;
        }
    }

    // shifting pivot after the small elements
    ++swapIndex;
    arr[hi] = arr[swapIndex];
    arr[swapIndex] = pivot;

    // since this is now pivot
    return swapIndex;
}

function sort(arr: number[], lo: number, hi: number): void {
    // base case
    if (lo >= hi) return;

    const pivotIdx = partition(arr, lo, hi);
    sort(arr, lo, pivotIdx - 1);
    sort(arr, pivotIdx + 1, hi);
}

export default function quick_sort(arr: number[]): void {
    sort(arr, 0, arr.length - 1);
}
