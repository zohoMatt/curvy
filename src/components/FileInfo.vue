<template>
    <div></div>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component({})
    export default class FileInfo extends Vue {
        @Prop({ type: String })
        name!: string;
    }
</script>
<style lang="less" scoped></style>
