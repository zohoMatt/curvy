<template>
    <div class="home">
        <upload-file @uploaded="process"></upload-file>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    import UploadFile from '@/components/UploadFile.vue';
    import { readFile } from '@/utils/fileReader';

    @Component({
        components: {
            UploadFile
        }
    })
    export default class Name extends Vue {
        public async process(file: File) {
            const content = await readFile(file);
            console.log(content);
        }
    }
</script>
