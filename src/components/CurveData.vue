<template>
    <div class="curve-data">
        <div class="curve-label">{{ curve.label }}</div>
        <div class="square-error">{{ squareErrorResult }}</div>
    </div>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { Point, SimCurve } from '@/utils/types';

    import { squareError } from '@/utils/maths';

    @Component({})
    export default class CurveData extends Vue {
        @Prop({ type: Object })
        public curve!: SimCurve;

        @Prop({ type: Array })
        public actualCurvePoints!: Point[];

        get squareErrorResult() {
            return squareError(this.curve.points, this.actualCurvePoints);
        }
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

    .curve-label {
        width: 30%;
    }
</style>
