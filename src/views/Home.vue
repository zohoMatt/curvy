<template>
    <div class="home">
        <upload-file @uploaded="process"></upload-file>
        <file-info></file-info>
        <curve-data
            v-for="curve in processedCurves"
            :key="curve.id"
            :actual-curve-points="actualCurvePoints"
            :curve="curve"
            :square-error="curve.squareError"
            :best-fit="curve.id === bestFitCurveId"
        ></curve-data>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    import UploadFile from '@/components/UploadFile.vue';
    import { parseData, readFile } from '@/utils/fileReader';
    import FileInfo from '@/components/FileInfo.vue';
    import CurveData from '@/components/CurveData.vue';
    import { Point, SimCurve } from '@/utils/types';
    import { squareError } from '@/utils/maths';

    @Component({
        components: {
            CurveData,
            FileInfo,
            UploadFile
        }
    })
    export default class Home extends Vue {
        public actualCurvePoints: Point[] = [];
        public simCurves: SimCurve[] = [];

        get processedCurves(): SimCurve[] {
            return this.simCurves.map(curve => ({
                ...curve,
                squareError: squareError(curve.points, this.actualCurvePoints)
            }));
        }

        get bestFitCurveId(): string {
            return this.processedCurves.reduce(
                (accu, { id, squareError }) => {
                    return squareError! < accu.min ? { id, min: squareError! } : accu;
                },
                { id: '', min: Infinity }
            ).id;
        }

        public async process(file: File) {
            const content = await readFile(file);
            const data = parseData(content);
            this.actualCurvePoints = data.actual;
            this.simCurves = data.simulation;
        }
    }
</script>
<style lang="less">
    .home {
    }
</style>
