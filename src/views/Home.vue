<template>
    <div class="home">
        <upload-file></upload-file>
    </div>
</template>

<script>
    import UploadFile from '@/components/UploadFile.vue';

    export default {
        name: 'Home',
        components: {
            UploadFile
        }
    };
</script>
