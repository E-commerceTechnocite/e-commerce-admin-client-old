<template>
  <div class="drag-and-drop">
        <div>

            <file-upload
                v-if="!isEdit"
                class="file-upload"
                :multiple="isMultiple"
                :drop="true"
                :drop-directory="true"
                v-model="files"
                input-id="files"
                @input-filter="inputFilter"
                ref="upload">
                    <i class="fas fa-file-image"></i>
                    Drop or click to upload images
                    not edit
            </file-upload>

            <file-upload
                v-if="isEdit"
                class="file-upload"
                :multiple="isMultiple"
                :drop="true"
                :drop-directory="true"
                v-model="singleFileImage"
                input-id="singleFileImage"
                @input-filter="inputFilter"
                ref="upload">
                    <i class="fas fa-file-image"></i>
                    Drop or click to upload images
                    edit
            </file-upload>

            <div v-show="$refs.upload && $refs.upload.dropActive" class="drop-active">
                <h3>Drop images</h3>
            </div>

        </div>

        <ul v-if="files.length">
            <li v-for="file in files" :key="file.id">
                <!-- <span>{{file}}</span> - -->
                <!-- <img :src="file.blob" :alt="file.name"> -->
                <!-- <span>{{$formatSize(file.size)}}</span> - -->
                <span v-if="file.error">{{file.error}}</span>
                <span v-else-if="file.success">success</span>
                <span v-else-if="file.active">active</span>
                <span v-else></span>
            </li>
        </ul>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import FileUpload from 'vue-upload-component'
import { watch, watchEffect } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
    components: { FileUpload },
    props: [
        'multiple',
        'edit',
        'index'
    ],
    setup(props, {emit}) {
        const store = useStore()
        const isMultiple = ref(props.multiple)
        const isEdit = ref(props.edit)
        const singleFileImage = ref()
        const files = ref([])
        const inputFilter= function(newFile, oldFile, prevent) {
        if (newFile && !oldFile) {
            // Add file

            // Filter non-image file
            // Will not be added to files
            if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
            return prevent()
            }
            
            // Create the 'blob' field for thumbnail preview
            newFile.blob = ''
            let URL = window.URL || window.webkitURL
            if (URL && URL.createObjectURL) {
                newFile.blob = URL.createObjectURL(newFile.file)
            }
        }

        if (newFile && oldFile) {
            // Update file

            // Increase the version number
            if (!newFile.version) {
            newFile.version = 0
            }
            newFile.version++
        }

        if (!newFile && oldFile) {
            // Remove file

            // Refused to remove the file
            // return prevent()
        }
    }
    watch(singleFileImage, (newVal, oldVal) => {
        emit('newImage', newVal)
    })
    watchEffect(() => { if (!isEdit.value) store.dispatch( 'dashboard/PASS_IMAGE', files.value)})
    return {
        singleFileImage, 
        files, 
        isMultiple, 
        isEdit, 
        inputFilter}
    },
    
}
</script>

<style scoped>
.drag-and-drop {
    background: white;
    height: 50%;
    border: 2px #535353 dashed;

}
.drag-and-drop .drop-active {
    position: absolute;
    z-index: 2;
    opacity: .1;
    text-align: center;
    background: #000;
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
}
.drag-and-drop div:first-child {
    background: red;
    height: 100%;
    position: relative;
}
.drag-and-drop .file-upload {
    /* background: red; */
    background: white;
    width: 100%;
    height: 100%; 
     display: flex;
     flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}
.drag-and-drop .file-upload i {
    font-size: 50px;
    margin-bottom: 20px;
}
</style>