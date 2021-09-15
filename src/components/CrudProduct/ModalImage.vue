<template>
    <div class="modal-image">
        <div class="modal-mask" @click.self="$emit('close')">
            <div class="modal-body">
                <!-- <DragAndDrop/> -->
                <div class="modal-content">
                    <div class="current-image">
                        <img :src="file.blob" :alt="file.name" :title="file.name">   
                    </div>
                    <div class="modal-actions">
                        <div class="image-title">
                                <label for="title">Title</label>
                                <input type="text" id="title" name="title" v-model="currentName">
                        </div>
                        <div class="modal-buttons">
                            <button class="delete-action">
                                <i class="fas fa-trash"></i>
                            </button>
                            <div>
                                <button class="secondary-action" @click="$emit('close')">
                                    CLOSE
                                </button>
                                <button class="action">
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
import { computed, ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import DragAndDrop from './DragAndDrop.vue'
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'

export default {
    components: {
        DragAndDrop
    },
    setup() {
        const store = useStore()
        const file = computed(() => store.getters['dashboard/GET_CURRENT_IMAGE'])
        const currentName = ref(file.value.name)
        onMounted(() => document.body.style.overflow = 'hidden')
        onUnmounted(() => document.body.style.overflow = 'auto')
        console.log(file.value)
        return {
            file,
            currentName
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