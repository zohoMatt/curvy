import { Point } from '@/utils/types';
import { binarySearch } from '@/utils/manipulate';

export function interpolateY(pt1: Point, pt2: Point, x: number) {
    const [x1, y1] = pt1;
    const [x2, y2] = pt2;
    const factor = (x - x1) / (x2 - x1);
    return y1 + factor * (y2 - y1);
}

export function squareErrors(pts: Point[], actualPts: Point[]) {
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
