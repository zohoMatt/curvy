<template>
    <div class="home">
        <upload-file @uploaded="process"></upload-file>
        <file-info></file-info>
        <curve-data
            v-for="curve in simCurves"
            :key="curve.label"
            :actual-curve-points="actualCurvePoints"
            :curve="curve"
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

    @Component({
        components: {
            CurveData,
            FileInfo,
            UploadFile
        }
    })
    export default class Name extends Vue {
        public actualCurvePoints: Point[] = [];
        public simCurves: SimCurve[] = [];

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
