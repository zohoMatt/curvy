const fs = require('fs-extra');
const path = require('path');

const TEST_DATA = path.resolve('./test/curves.csv');
const data = fs.readFileSync(TEST_DATA, { encoding: 'utf-8' });
const lines = data.split('\n');

const curveN = (lines[0].split(',').length - 2) / 2;
const actualCurve = [];
const simCurves = Array(curveN).fill(null).map(_ => []);

for (const line of lines.slice(1)) {
    const [nv, pilot, ...sims]  = line.trim().split(',');
    if (nv !== '') actualCurve.push([+nv, +pilot]);

    for (let i = 0; i < curveN; i++) {
        simCurves[i].push([+sims[2 * i], +sims[2 * i + 1]]);
    }
}

let minSquareError = Infinity;
let minIdx = -1;
for (let i = 0; i < simCurves.length; i++) {
    const curve = simCurves[i];
    const se = sqaureError(curve, actualCurve);
    if (se < minSquareError) {
        minSquareError = se;
        minIdx = i;
    }
    console.log(`The square error of No. ${i} is ${se}.`);

}

console.log(`Minimum square error is No. ${minIdx} with ${minSquareError}.`);

function sqaureError(pts, actualPts) {
    const xs = pts.map(p => p[0]);
    let accum = 0;
    for (const [px, py] of actualPts) {
        const intervalEndIdx = binarySearch(xs, px);
        const [start, end] = [intervalEndIdx - 1, intervalEndIdx];
        const ny = interpolateY(pts[start], pts[end], px);
        accum += (ny - py) ** 2;
    }
    return accum;
}

function binarySearch(arr, target) {
    let lo = 0;
    let hi = arr.length;
    while (lo < hi) {
        let pivot = Math.floor((lo + hi) / 2);
        if (arr[pivot] < target) {
            lo = pivot + 1;
        } else {
            hi = pivot - 1;
        }
    }

    return arr[lo] < target ? lo + 1 : lo;
}

function interpolateY(pt1, pt2, x) {
    const [x1, y1] = pt1;
    const [x2, y2] = pt2;
    const factor = (x - x1) / (x2 - x1);
    return y1 + factor * (y2 - y1);
}


