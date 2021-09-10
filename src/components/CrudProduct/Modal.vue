
<template>
    <div class="bloc-modal" v-if="isVisible">
        <div class="overlay"></div>
            <div class="modal-card">
                <div class="btn-modal btn btn-danger" @click="showModal()">X</div>
                <h3> Le contenu de la modale</h3>
                <input type="file" @change="onFileSelected()">
                
            </div>
       
    </div>
</template>

<script>
import {ref} from 'vue'
    export default {
       name :'Modal',
       props :['isVisible','showModal'] ,

       setup(){
         const selectedFile=ref(null)
         return {selectedFile }
       },
       methos:{
           onFileSelected(){
              
           }

           /*  shoonFileSelected: function(){
                  
                    console.log(' afile has been selected')
               } */
       }

    }
</script>

<style scoped>
.bloc-modal{
    position:fixed ;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.overlay{
    background: rgba(0,0,0,0.5);
     position:fixed ;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.modal-card {
    background: #f1f1f1;
    color : #333;
    padding:50px;
    position:fixed;
    top:30%;
}
.btn-modal {
    position : absolute;
    top : 10px;
    right: 10px;;
}
</style>