<template>
    <div class="modal-image">
        <div class="modal-mask" @click.self="$emit('close')">
            <div class="modal-body">
                <DragAndDrop :multiple="false" :edit="true" @newImage="updateImage"/>
                <div class="modal-content">
                    <div class="current-image">
                        <img :src="currentFile.blob" :alt="currentFile.name" :title="currentFile.name">   
                    </div>
                    <div class="modal-actions">
                        <div class="image-title">
                            <label for="title">Title</label>
                            <input type="text" id="title" name="title" v-model="currentFile.name">
                        </div>
                        <div class="modal-buttons">
                            <button class="delete-action" @click="handleRemove">
                                <i class="fas fa-trash"></i>
                            </button>
                            <div>
                                <button class="secondary-action" @click="$emit('close')">
                                    CLOSE
                                </button>
                                <button class="action" @click="submitChange">
                                    ADD
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="modal-default-button" @click="$emit('close')">
                OK
            </button>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import DragAndDrop from './DragAndDrop.vue'
import { onMounted, onUnmounted } from '@vue/runtime-core'

export default {
    components: {
        DragAndDrop
    },
    setup(props, {emit}) {
        const store = useStore()
        const file = ref(store.getters['dashboard/GET_CURRENT_IMAGE'])
        const newFile = ref()
        const newFileIndex = ref(store.getters['dashboard/GET_CURRENT_IMAGE_INDEX'])
        const currentFile = ref(file.value)
        const updateImage = (newImage) => {
            currentFile.value = newImage[0]
            store.dispatch( 'dashboard/PASS_CURRENT_IMAGE', {file: newImage, index: null})
        }
        const submitChange = () => {
            store.dispatch( 'dashboard/PASS_UPDATE_CURRENT_IMAGE', {file: currentFile.value} )
            emit('close')
        }
        const handleRemove = () => {
            store.dispatch('dashboard/PASS_REMOVE_CURRENT_IMAGE', newFileIndex)
            emit('close')
        }
        onMounted(() => document.body.style.overflow = 'hidden')
        onUnmounted(() => document.body.style.overflow = 'auto')
        return {
            file,
            currentFile,
            newFile,
            submitChange,
            updateImage,
            handleRemove
        }
    }
}
</script>


<style>
.modal-image .modal-body {
    background: white;
    width: 650px;
    height: 720px;
    padding: 30px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
    display:flex;
    flex-direction: column;
    justify-content: space-around;
}
.modal-image .modal-content {
    display: flex;
}
.modal-image .modal-actions {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.modal-image .image-title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 20px 0 10px;
}
.modal-image .image-title input {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border-radius: 4px;
    border: 1px solid #D6D6D6;
}

.modal-image .modal-buttons {
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
}
.modal-image .modal-buttons .action {
    margin-left: 10px;
}
.modal-image .current-image{
    width: 250px;
    height: 250px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #EEEEEE;
}    
.modal-image .current-image img {
    max-width: 450px;
    min-width: 250px;
    width: 100%;
}
.modal-image .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal-image .modal-container {
    width: 300px;
    margin: 0px auto;
    background-color: #fff;
}
</style>