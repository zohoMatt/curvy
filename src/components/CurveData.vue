<template>
    <div :class="['curve-data', { 'best-fit': bestFit }]">
        <div class="curve-label">{{ curve.label }}</div>
        <div class="square-error">{{ squareError }}</div>
        <div class="best-fit-label">{{ bestFit ? 'Most Curvy' : '' }}</div>
    </div>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { Point, SimCurve } from '@/utils/types';

    @Component({})
    export default class CurveData extends Vue {
        @Prop({ type: Object })
        public curve!: SimCurve;

        @Prop({ type: Array })
        public actualCurvePoints!: Point[];

        @Prop({ type: Number })
        public squareError!: number;

        @Prop({ type: Boolean })
        public bestFit!: boolean;
    }
</script>
<style lang="less" scoped>
    .curve-data {
        max-width: 66%;
        margin: auto;

        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    .best-fit {
        font-weight: bold;
    }

    .best-fit-label {
        margin-left: 10rem;
    }

    .curve-label {
        width: 30%;
    }
</style>
