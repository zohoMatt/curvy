<template>
    <div class="uploader">
        <file-pond
            name="test"
            ref="pond"
            label-idle="Drop files here..."
            accepted-file-types="text/csv"
            :allow-multiple="false"
            @addfile="addFile"
        />
    </div>
</template>
<script lang="ts">
    // Import Vue FilePond
    import vueFilePond from 'vue-filepond';

    // Import FilePond styles
    import 'filepond/dist/filepond.min.css';
    import { Component, Vue } from 'vue-property-decorator';

    @Component({
        components: {
            FilePond: vueFilePond()
        }
    })
    export default class UploadFile extends Vue {
        public myFiles: string[] = [];

        public async addFile(error: any, instance: any) {
            this.$emit('uploaded', instance.file);
        }
    }
</script>
<style lang="less" scoped>
    .uploader {
        max-width: 66%;
        margin: auto;
    }
</style>
