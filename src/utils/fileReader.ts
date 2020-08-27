import { Point, SimCurve } from '@/utils/types';

export async function readFile(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => reject('Reader Error.');
        reader.readAsText(file);
    });
}

export interface Data {
    actual: Point[];
    simulation: SimCurve[];
}

export function parseData(dataFile: string): Data {
    const lines = dataFile.split('\n');
    const curveN = (lines[0].split(',').length - 2) / 2;
    const actualCurve: Point[] = [];
    const simCurves: SimCurve[] = Array(curveN)
        .fill(null)
        .map((_, i) => ({ label: `Curve ${i + 1}`, points: [] }));

    for (const line of lines.slice(1)) {
        const [nv, pilot, ...sims] = line.trim().split(',');
        if (nv !== '') actualCurve.push([+nv, +pilot]);

        for (let i = 0; i < curveN; i++) {
            simCurves[i].points.push([+sims[2 * i], +sims[2 * i + 1]]);
        }
    }
    return {
        actual: actualCurve,
        simulation: simCurves
    };
}
