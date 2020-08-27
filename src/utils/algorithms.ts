export function binarySearch(arr: number[], target: number) {
    let lo = 0;
    let hi = arr.length;
    while (lo < hi) {
        const pivot = Math.floor((lo + hi) / 2);
        if (arr[pivot] < target) {
            lo = pivot + 1;
        } else {
            hi = pivot - 1;
        }
    }

    return arr[lo] < target ? lo + 1 : lo;
}
