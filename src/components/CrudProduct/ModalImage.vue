<template>
    <div class="modal-image">
        <div class="modal-mask">
            <div class="modal-container">
                <div class="modal-body">
                    <div name="body">
                    default body
                    </div>
                </div>
                <button class="modal-default-button" @click="$emit('close')">
                    OK
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore()
        const file = computed(() => store.getters['dashboard/GET_CURRENT_IMAGE'])
        console.log(file.value)
        return {
            file
        }
    }
}
</script>


<style>
/* body.modal-image {
    overflow:hidden;
} */
/* .modal-image .modal-background {
    position: absolute;
    background: black;
    opacity: 0.2;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

} */

.modal-mask {
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

.modal-container {
  width: 300px;
  margin: 0px auto;
  background-color: #fff;
}
</style>