<template>
    <div :class="['curve-data', { 'best-fit': bestFit }]">
        <div class="curve-label">{{ curve.label }}</div>
        <div class="square-error">{{ squareError.toPrecision(precision) }}</div>
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

        @Prop({ type: Number, default: 4 })
        public precision!: number;
    }
</script>
<style lang="less" scoped>
    .curve-data {
        max-width: 66%;
        margin: auto;

        display: grid;
        grid-template-columns: 40% 30% 20%;
    }

    .best-fit {
        font-weight: bold;
    }

    .best-fit-label {
    }
</style>
