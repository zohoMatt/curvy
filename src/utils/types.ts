export type Point = [number, number];

export interface SimCurve {
    id: string;
    label: string;
    points: Point[];
    squareError?: number;
}
